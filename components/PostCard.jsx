import React from "react";

function PostCard({ post }) {
  return (
    <div>
      {post.title}
      {post.excert}
    </div>
  );
}

export default PostCard;
