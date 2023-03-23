import Head from "next/head";
import { Categories, PostWidget, PostCard } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div
      style={{
        maxWidth: "80rem",
        margin: "0 auto",
        padding: "0 2rem",
        marginBottom: "2rem",
      }}
    >
      <Head>
        <title>Modern Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundColor: "red",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        <div style={{ gridColumnStart: "1", gridColumnEnd: "4" }}>
          {posts.map((post) => (
            <PostCard key={post.node.title} post={post.node} />
          ))}
        </div>
        <div style={{ backgroundColor: "green" }}>
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  console.log(posts);

  return {
    props: { posts },
  };
}
