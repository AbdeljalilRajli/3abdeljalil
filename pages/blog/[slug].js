import { fetchEntry, fetchEntries } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Layout from "@/src/layout/Layout";
import styles from './BlogPost.module.css';
import Image from 'next/image';
import Link from "next/link";

// Function to get static paths for the blog posts
export async function getStaticPaths() {
  const posts = await fetchEntries();
  const paths = posts.map(post => ({
    params: { slug: post.fields.slug }
  }));

  return {
    paths,
    fallback: true,
  };
}

// Function to get the static props for the single blog post page
export async function getStaticProps({ params }) {
  const post = await fetchEntry(params.slug);
  return {
    props: {
      post,
    },
  };
}

// Custom rendering options for rich text
const renderOptions = {
  renderNode: {
    'embedded-asset-block': (node) => {
      const { file, title } = node.data.target.fields;
      const { width, height } = file.details.image;
      if (!file || !file.url) {
        console.warn("Missing file data:", node);
        return <p>Image not available</p>; // Fallback for missing data
      }
      return (
        <div className={styles.imageContainer}>
          <Image
            src={`https:${file.url}`}
            alt={title || 'Embedded Image'}
            width={800} // Set a fixed width
            height={(height / width) * 800} // Calculate height based on aspect ratio
            layout="responsive"
          />
        </div>
      );
    },
  },
};

// Main component to render the single blog post
const BlogPost = ({ post }) => {
  return (
    <Layout header={2} singleMenu footer={1}>
      <div className="container container-1100">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title mt-200 mb-10">
              <span className="sub-title mb-0">{new Date(post.fields.publishedDate).toDateString()}</span>
            </div>
            <h3 className="hero-title style-two mt-0 mb-60 wow fadeInUp delay-0-2s">
              {post.fields.title}
            </h3>
            <div className={styles.imageContainer}>
              {post.fields.featuredImage && (
                <Image
                  src={`https:${post.fields.featuredImage.fields.file.url}`}
                  alt={post.fields.featuredImage.fields.title || 'Blog Image'}
                  width={800}
                  height={400}
                  layout="responsive"
                />
              )}
            </div>
            <div className="banner-text wow fadeInUp delay-0-3s">
              {documentToReactComponents(post.fields.content, renderOptions)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
