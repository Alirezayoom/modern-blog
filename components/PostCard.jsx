import Image from "next/image";
import moment from "moment/moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "1rem",
        overflow: "hidden",
        backgroundColor: "#333",
        maxWidth: "100%",
      }}
    >
      <div style={{ width: "100%", aspectRatio: "1/0.5" }}>
        <Image
          src={post.featuredImage.url}
          width={500}
          height={500}
          alt={post.title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* content */}
      <div style={{ padding: "1rem", display: "grid", gap: "1rem" }}>
        <h1 style={{ fontSize: "1.5rem", textAlign: "center" }}>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "30px",
              aspectRatio: "1/1",
              overflow: "hidden",
              borderRadius: "9rem",
            }}
          >
            <Image
              src={post.author.avatar.url}
              width={100}
              height={100}
              alt={post.author.name}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            />
          </div>
          <div style={{}}>{post.author.name}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          <div>{moment(post.createdAt).format("DD MMM YYYY")}</div>
        </div>
        <div style={{ fontSize: "1.125rem", textAlign: "center" }}>
          {post.excerpt}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
