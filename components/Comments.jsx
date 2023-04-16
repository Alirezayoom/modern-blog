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
    <div>
      {comments.length > 0 && (
        <div>
          <h3>{comments.length} Comments</h3>
          {comments.map((comment) => (
            <div key={comment.createdAt}>
              <p>{comment.name}</p> on{" "}
              {moment(comment.createdAt).format("DD MMM YYYY")}
              <p>{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
