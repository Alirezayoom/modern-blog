import Image from "next/image";
import moment from "moment/moment";

const PostDetail = ({ post }) => {
  return (
    <div
      style={{
        backgroundColor: "#333",
        overflow: "hidden",
        borderRadius: "1rem",
      }}
    >
      <div>
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width={500}
          height={500}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* author and date */}
      <div style={{ padding: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
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
              viewBox="0 0 16 16"
            >
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            <div>{moment(post.createdAt).format("DD MMM YYYY")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
