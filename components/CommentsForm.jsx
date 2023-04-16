import { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const storeDataRef = useRef();

  useEffect(() => {
    nameRef.current.value = window.localStorage.getItem("name");
    emailRef.current.value = window.localStorage.getItem("email");
  }, []);

  const handleComment = () => {
    setError(false);

    const { value: comment } = commentRef.current;
    const { value: name } = nameRef.current;
    const { value: email } = emailRef.current;
    const { checked: storeData } = storeDataRef.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#333",
        marginTop: "2rem",
        borderRadius: "1rem",
        padding: "1.5rem",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Comments</h3>

        <textarea
          type="text"
          name="comment"
          ref={commentRef}
          rows="4"
          placeholder="Type your comment here..."
          style={{
            width: "100%",
            borderRadius: "1rem",
            outline: "none",
            border: "0",
            backgroundColor: "#444",
            resize: "none",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        ></textarea>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "0.5rem" }}>
          <input
            type="text"
            name="name"
            ref={nameRef}
            placeholder="Name"
            style={{
              width: "100%",
              borderRadius: "1rem",
              outline: "none",
              border: "0",
              backgroundColor: "#444",
              padding: "0.625rem 1rem",
            }}
          />

          <input
            type="text"
            name="email"
            ref={emailRef}
            placeholder="Email"
            style={{
              width: "100%",
              borderRadius: "1rem",
              outline: "none",
              border: "0",
              backgroundColor: "#444",
              padding: "0.625rem 1rem",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <input
            type="checkbox"
            name="storeData"
            id="storeData"
            value="true"
            ref={storeDataRef}
            style={{
              borderRadius: "1rem",
              outline: "none",
              border: "0",
              backgroundColor: "#444",
              padding: "0.625rem 1rem",
            }}
          />
          <label
            htmlFor="storeData"
            style={{ marginLeft: "0.5rem", color: "#ccc" }}
          >
            remember me for next time
          </label>
        </div>

        {error && <p>All fields are required</p>}

        <button
          type="button"
          onClick={handleComment}
          style={{
            borderRadius: "1rem",
            outline: "none",
            border: "0",
            backgroundColor: "#444",
            padding: "0.625rem 2rem",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
        >
          Submit
        </button>

        {showSuccessMessage && (
          <span style={{ color: "green", marginLeft: "1rem" }}>
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
