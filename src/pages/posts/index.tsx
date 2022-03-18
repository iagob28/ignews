import styles from "./styles.module.scss";
import Head from "next/head";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismics";
import { RichText } from "prismic-dom";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};
interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <a key={post.slug} href="/">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();

  const response = await client.getAllByType("PostIgnews");
  console.log(JSON.stringify(response, null, 2));
  const posts = response.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.Title),
      excerpt:
        post.data.Content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: { posts },
  };
};
