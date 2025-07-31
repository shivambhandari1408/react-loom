import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../style/NewArrivals.css";
import { useNavigate } from "react-router-dom";

function NewArrivals() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.error("API ERROR:", err));
  }, []);

  return (
    <section id="new-arrivals-section" className="new-arrivals-section">
      <h1 className="new-arrivals-heading">NEW ARRIVALS</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            original={product.originalPrice || product.price}
            image={product.thumbnail}
            rating={product.rating}
            product={product} // ✅ Pass full product to support WishlistIcon
            onClick={() => navigate("/about", { state: { product } })} // ✅ Move click handler to ProductCard
          />
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
