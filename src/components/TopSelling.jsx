import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import "../style/TopSelling.css";
import { useNavigate } from "react-router-dom";

function TopSelling() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!products) return;
    axios
      .get("https://dummyjson.com/products/category/smartphones?limit=10")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.error("AAPI ERROR:", err));
  }, []);

  return (
    <section className="top-selling-section">
      <h1 className="top-selling-heading">TOP SELLING</h1>
      <div className="top-selling-grid">
        {products.map((product) => (
            <ProductCard
            key={product.id}
            product={product} // ✅ Pass full product to support WishlistIcon
            onClick={() => navigate("/about", { state: { product } })} // ✅ Move click handler to ProductCard
          />
        ))}
      </div>
    </section>
  );
}

export default TopSelling;

