import { useState, useEffect } from "react";
import moment from "moment/moment";
import parse from "html-react-parser";

import { getComments } from "../services";
import { comment } from "postcss";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div
          style={{
            backgroundColor: "#333",
            marginTop: "2rem",
            borderRadius: "1rem",
            padding: "1.5rem",
          }}
        >
          <div>
            <h3 style={{ marginBottom: "5px" }}>{comments.length} Comments</h3>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#eee",
                marginBottom: "1rem",
              }}
            ></div>
            <div style={{ display: "grid", gap: "1rem" }}>
              {comments.map((comment) => (
                <div
                  key={comment.createdAt}
                  style={{
                    backgroundColor: "#444",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{ display: "flex", gap: "5px", marginBottom: "8px" }}
                  >
                    <p>{comment.name}</p>

                    <p
                      style={{
                        fontSize: "12px",
                        backgroundColor: "#666",
                        padding: "2px 1rem",
                        borderRadius: "10px",
                      }}
                    >
                      {moment(comment.createdAt).format("DD MMM YYYY")}
                    </p>
                  </div>
                  <p>{parse(comment.comment)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
