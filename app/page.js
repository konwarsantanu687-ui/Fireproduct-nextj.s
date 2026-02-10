"use client";
import { useState } from "react";

/* ---------------- DATA ---------------- */
const products = [
  {
    id: 1,
    title: "Maybelline Fit Me Foundation",
    price: "₹499",
    category: "makeup",
    image: "https://m.media-amazon.com/images/I/61C+vC3gJhL._SX679_.jpg"
  },
  {
    id: 2,
    title: "Lakme Eyeconic Kajal",
    price: "₹210",
    category: "makeup",
    image: "https://m.media-amazon.com/images/I/51o6nZrM4PL._SX679_.jpg"
  },
  {
    id: 3,
    title: "Fastrack Analog Watch",
    price: "₹1,299",
    category: "watch",
    image: "https://m.media-amazon.com/images/I/61t5zC6xGEL._SX679_.jpg"
  },
  {
    id: 4,
    title: "Noise ColorFit Smart Watch",
    price: "₹1,999",
    category: "watch",
    image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SX679_.jpg"
  }
];

/* ---------------- PAGE ---------------- */
export default function FireProduct() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  return (
    <div style={styles.body}>

      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.logo}>🔥 FireProduct</h1>
        <input style={styles.search} placeholder="Search products..." />
      </header>

      {/* CATEGORIES */}
      <div style={styles.categories}>
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("makeup")}>Makeup</button>
        <button onClick={() => setCategory("watch")}>Watches</button>
      </div>

      {/* PRODUCTS */}
      <div style={styles.grid}>
        {filtered.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} style={styles.image} />
            <h3>{product.title}</h3>
            <p style={styles.price}>{product.price}</p>

            <button style={styles.button}>
              View Product
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 FireProduct <br />
        Product showcase website
      </footer>

    </div>
  );
}

/* ---------------- STYLES ---------------- */
const styles = {
  body: {
    background: "#f2f2f2",
    minHeight: "100vh",
    fontFamily: "Arial, Helvetica, sans-serif"
  },
  header: {
    background: "#131921",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color: "#ff9900"
  },
  search: {
    padding: "8px 15px",
    borderRadius: "4px",
    border: "none",
    width: "260px"
  },
  categories: {
    padding: "15px 30px",
    display: "flex",
    gap: "15px"
  },
  grid: {
    padding: "30px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px"
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0,0,0,.1)"
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "contain"
  },
  price: {
    color: "#b12704",
    fontWeight: "bold"
  },
  button: {
    marginTop: "10px",
    width: "100%",
    background: "#ff9900",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  footer: {
    background: "#000",
    color: "#aaa",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px"
  }
};
