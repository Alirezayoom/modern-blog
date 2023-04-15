import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div
      style={{
        backgroundColor: "#333",
        marginTop: "2rem",
        borderRadius: "1rem",
      }}
    >
      <div
        style={{
          width: "60px",
          aspectRatio: "1/1",
          position: "relative",
          borderRadius: "9rem",
          overflow: "hidden",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "-30px",
        }}
      >
        <Image
          src={author.avatar.url}
          width={60}
          height={60}
          alt={author.name}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gap: "0.625rem",
          textAlign: "center",
          margin: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <h3>{author.name}</h3>
        <p>{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
