import { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <header
      style={{
        backgroundColor: "#333",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "64rem",
          margin: "0 auto",
          padding: "0.625rem 2rem",
        }}
      >
        <div>
          <Link href="/" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            My Blog
          </Link>
        </div>

        <div>
          <ul style={{ display: "flex", gap: "2rem" }}>
            {categories.map((categoriy) => (
              <li key={categoriy.slug} style={{}}>
                <Link href={`/category/${categoriy.slug}`}>
                  {categoriy.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
