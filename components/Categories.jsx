import Link from "next/link";
import { useState, useEffect } from "react";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

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
        Categories
      </h3>
      <div
        style={{
          display: "grid",
          gap: "0.4rem",
        }}
      >
        {categories.map((category) => (
          <div key={category.slug}>
            <div>
              <Link href={`/category/${category.slug}`}>{category.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
