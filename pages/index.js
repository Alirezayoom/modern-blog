import Head from "next/head";
import { Categories, PostWidget, PostCard } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "2rem auto",
        padding: "0 2rem",
      }}
    >
      <Head>
        <title>Modern Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "8fr 3fr",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "1rem",
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.node.title} post={post.node} />
          ))}
        </div>
        <div
          style={{
            position: "sticky",
            top: "1rem",
            alignSelf: "start",
          }}
        >
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
