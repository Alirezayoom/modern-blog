import { useState, useEffect } from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services/index";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [categories, slug]);

  return (
    <div
      style={{
        backgroundColor: "#444",
        padding: "1rem",
        borderRadius: "1rem",
        marginBottom: "2rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.125rem",
          borderBottom: "1px solid white",
          paddingBottom: "0.625rem",
          marginBottom: "0.625rem",
        }}
      >
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <div style={{ display: "grid", gap: "0.625rem" }}>
        {relatedPosts.map((post) => (
          <div
            key={post.title}
            style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "9rem",
                overflow: "hidden",
                width: "3rem",
                aspectRatio: "1/1",
              }}
            >
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                width={50}
                height={50}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>

            <div>
              <div style={{ fontSize: "0.875rem", marginBottom: "0.2rem" }}>
                {moment(post.createdAt).format("DD MMM YYYY")}
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: "bold" }}>
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
