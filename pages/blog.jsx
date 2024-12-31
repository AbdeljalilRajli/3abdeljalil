import Layout from "@/src/layout/Layout";
import { fetchEntries } from '@/lib/contentful';
import Link from 'next/link';
import styles from './blog/BlogPost.module.css'; // Import your CSS module

export async function getStaticProps() {
  const posts = await fetchEntries();
  return {
    props: {
      posts,
    },
  };
}

const BlogPage = ({ posts }) => {
  return (
    <Layout header={2} singleMenu footer={1}>
      {/* Page Banner Section Start */}
      <section className="page-banner pt-200 rpt-150 pb-45 rel z-1">
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="hero-title style-two mt-0 mb-15 wow fadeInUp delay-0-2s">
                Tech Talks & Design Diaries
              </h2>
              <div className="banner-text wow fadeInUp delay-0-3s">
                Bringing you fresh perspectives and behind-the-scenes stories from the intersection of technology and design.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {posts.map((post) => (
            <div key={post.sys.id} className={styles.gridItem}>
              {post.fields.featuredImage && (
                <Link href={`/blog/${post.fields.slug}`} passHref>
                  <img
                    src={`https:${post.fields.featuredImage.fields.file.url}`}
                    alt={post.fields.featuredImage.fields.title || 'Blog Image'}
                    className={styles.image}
                  />
                </Link>
              )}
              <p className={styles.date}>{new Date(post.fields.publishedDate).toDateString()}</p>
              <Link href={`/blog/${post.fields.slug}`} passHref>
                <h2 className={styles.title}>{post.fields.title}</h2>
              </Link>
              <p className={styles.excerpt}>{post.fields.excerpt}</p>
              <Link href={`/blog/${post.fields.slug}`} passHref>
                <button className={styles.readMoreButton}>Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;