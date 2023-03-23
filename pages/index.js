import Head from "next/head";
import { Categories, PostWidget, PostCard } from "../components";

const data = [
  {
    id: 1,
    title: "React Best Practices",
    excerpt: "Learn React best practices in one topic",
  },
  { id: 2, title: "React Testing", excerpt: "Learn React testing easily" },
  {
    id: 3,
    title: "React Best Practices",
    excerpt: "Learn React best practices in one topic",
  },
  { id: 4, title: "React Testing", excerpt: "Learn React testing easily" },
];

export default function Home() {
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
          {data.map((data) => (
            <PostCard key={data.id} post={data} />
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
