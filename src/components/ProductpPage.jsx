import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../style/productpage.css";
import axios from "axios";

function ProductPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (!category) return;
    window.scrollTo(0, 0);
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, [category]);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  return (
    <section className="Casual-section">
      <h1 className="category-title">{category.toUpperCase()}</h1>

      <div className="topbar-controls">
        <div className="sort-by">
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option disabled value="">Sort By</option>
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="discountHighLow">Discount: High to Low</option>
          </select>
        </div>
        <button className="filter-toggle" onClick={toggleFilters}>Filters</button>
      </div>

      <div className="casual-content">
        <div className="product-casual">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => navigate("/about", { state: { product } })}
            />
          ))}
        </div>
      </div>

      {showFilters && (
        <div className="filter-backdrop" onClick={toggleFilters}>
          <div className="filter-overlay" onClick={(e) => e.stopPropagation()}>
            <div className="filter-header">
              <h3>Filters</h3>
              <button className="close-filter" onClick={toggleFilters}>×</button>
            </div>

            <div className="filter-range">
              <h4>Price</h4>
              <input type="range" min={0} max={10000} className="range-bar" />
              <div className="range-labels">
                <span>₹0</span>
                <span>₹10,000</span>
              </div>
            </div>

            <div className="filter-section">
              <h4>Category</h4>
              <div className="filter-list1">
                {["T-shirt", "Shirt", "Jeans", "Hoodie", "Shorts"].map((item) => (
                  <label key={item} className="checkbox-label">
                    <input type="checkbox" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-color">
              <h4>Color</h4>
              <div className="filter-colorall">
                {["red", "blue", "pink", "orange", "black", "yellow"].map((color) => (
                  <div
                    key={color}
                    style={{ backgroundColor: color }}
                    className="color-circle"
                  ></div>
                ))}
              </div>
            </div>

            <div className="filter-size">
              <h4>Size</h4>
              <div className="filter-sizeall">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button key={size} className="size-btn">{size}</button>
                ))}
              </div>
            </div>

            <div className="filter-dressstyle">
              <h4>Dress Style</h4>
              {["Casual", "Formal", "Party", "Gym"].map((style) => (
                <label key={style} className="checkbox-label">
                  <input type="checkbox" />
                  {style}
                </label>
              ))}
            </div>

            <div className="filter-actions">
              <button className="clear-btn">Clear All</button>
              <button className="apply-btn">Apply Filter</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductPage;
