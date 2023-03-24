import { getPosts, getPostDetails } from "../../services";

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from "../../components";

export default function Post({ post }) {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "2rem auto",
        padding: "0 2rem",
      }}
    >
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
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div
          style={{
            position: "sticky",
            top: "1rem",
            alignSelf: "start",
          }}
        >
          <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
          <Categories />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
