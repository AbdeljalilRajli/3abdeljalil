import { fetchEntry, fetchEntries } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from "@/src/layout/Layout";
import styles from './BlogPost.module.css';
import Image from 'next/image';

// Function to get static paths for the blog posts
export async function getStaticPaths() {
  const posts = await fetchEntries(); // Use fetchEntries to get all posts
  const paths = posts.map(post => ({
    params: { slug: post.fields.slug }
  }));

  return {
    paths,
    fallback: true, // Show fallback if no path is found
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

// Main component to render the single blog post
const BlogPost = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>; // Fallback content while loading
  }

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
                <Image
                    src={`https:${post.fields.featuredImage.fields.file.url}`} // Use URL from Contentful
                    alt={post.fields.featuredImage.fields.title || 'Blog Image'}
                    width={800} // Adjust width as needed
                    height={400} // Adjust height as needed
                    layout="responsive" // Optional, maintains aspect ratio
                />
              </div>
              <div className="banner-text wow fadeInUp delay-0-3s">
                 {documentToReactComponents(post.fields.content)}
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default BlogPost;
