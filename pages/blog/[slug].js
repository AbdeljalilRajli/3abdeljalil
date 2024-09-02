import { fetchEntryBySlug } from '@/lib/contentful';
import Layout from '@/src/layout/Layout';
import styles from './BlogPost.module.css'; // Import your CSS module

export async function getStaticPaths() {
  // Fetch all slugs
  const posts = await fetchEntries();
  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await fetchEntryBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }) => (
  <Layout header={2} footer={1}>
    <div className={styles.container}>
      <h1 className={styles.title}>{post.fields.title}</h1>
      {post.fields.featuredImage && (
        <img
          src={`https:${post.fields.featuredImage.fields.file.url}`}
          alt={post.fields.featuredImage.fields.title || 'Blog Image'}
          className={styles.image}
        />
      )}
      <p className={styles.date}>{new Date(post.fields.publishedDate).toDateString()}</p>
      <div className={styles.content}>{post.fields.content}</div>
    </div>
  </Layout>
);

export default Post;
