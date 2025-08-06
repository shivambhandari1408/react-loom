import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import "../style/NewAndPopular.css";
import { useNavigate } from "react-router-dom";

function NewAndPopular() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("mens-shirts");

  const categories = [
    "mens-shirts",
    "womens-dresses",
    "tops",
    "mens-shoes",
    "womens-shoes",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "mens-watches",
    "womens-watches",
    "beauty",
  ];

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${selectedCategory}`
        );
        setProducts(res.data.products);
      } catch (err) {
        console.error("API ERROR:", err);
      }
    };

    fetchCategoryProducts();
  }, [selectedCategory]);

  return (
    <section className="new-and-popular-section">
      <h1 className="new-and-popular-heading">NEW AND POPULAR</h1>

      <div className="category-button">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${cat === selectedCategory ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="new-and-popular-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate("/about", { state: { product } })}
          />
        ))}
      </div>
    </section>
  );
}

export default NewAndPopular;
