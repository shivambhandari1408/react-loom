import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../style/productpage.css";
import axios from "axios";

function ProductPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  const options = [
    { value: "newest", label: "Newest" },
    { value: "popular", label: "Popular" },
    { value: "priceLowHigh", label: "Price: Low to High" },
    { value: "priceHighLow", label: "Price: High to Low" },
    { value: "discountHighLow", label: "Discount: High to Low" },
  ];

  const handleSelect = (value) => {
    setSortOption(value);
    setDropdownOpen(false);
  };

  return (
    <section className="Casual-section">
      <h1 className="category-title">{category?.toUpperCase()}</h1>

      {/* ======= SORT & FILTER TOP BAR ======= */}
      <div className="topbar-controls">
        <div
          className="sort-by"
          onClick={() => setDropdownOpen((prev) => !prev)}
          ref={dropdownRef}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setDropdownOpen((prev) => !prev)}
        >
          <div className="selected-option">
            {options.find((opt) => opt.value === sortOption)?.label}
          </div>
          <span className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}>
            ▼
          </span>

          {dropdownOpen && (
            <ul className="dropdown-menu">
              {options.map((option) => (
                <li
                  key={option.value}
                  className={option.value === sortOption ? "active" : ""}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="filter-toggle" onClick={toggleFilters}>
          Filters
        </button>
      </div>

      {/* ======= PRODUCT GRID ======= */}
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

      {/* ======= FILTER OVERLAY ======= */}
      {showFilters && (
        <div className="filter-backdrop" onClick={toggleFilters}>
          <div className="filter-overlay" onClick={(e) => e.stopPropagation()}>
            <div className="filter-header">
              <h3>Filters</h3>
              <button className="close-filter" onClick={toggleFilters}>
                ×
              </button>
            </div>

            {/* CATEGORY FILTER */}
            <div className="filter-section">
              <h4>Category</h4>
              <div className="filter-list1">
                <label className="checkbox-label">
                  <input type="checkbox" /> Casual
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> Formal
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" /> Sports
                </label>
              </div>
            </div>

            {/* PRICE RANGE */}
            <div className="filter-range">
              <h4>Price Range</h4>
              <input type="range" min="0" max="1000" className="range-bar" />
              <div className="range-labels">
                <span>₹0</span>
                <span>₹1000</span>
              </div>
            </div>

            {/* COLOR FILTER */}
            <div className="filter-color">
              <h4>Color</h4>
              <div className="filter-colorall">
                <div
                  className="color-circle"
                  style={{ backgroundColor: "black" }}
                ></div>
                <div
                  className="color-circle"
                  style={{ backgroundColor: "red" }}
                ></div>
                <div
                  className="color-circle"
                  style={{ backgroundColor: "blue" }}
                ></div>
                <div
                  className="color-circle"
                  style={{ backgroundColor: "green" }}
                ></div>
              </div>
            </div>

            {/* SIZE FILTER */}
            <div className="filter-size">
              <h4>Size</h4>
              <div className="filter-sizeall">
                <button className="size-btn">S</button>
                <button className="size-btn">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
              </div>
            </div>

            {/* DRESS STYLE FILTER */}
            <div className="filter-dressstyle">
              <h4>Dress Style</h4>
              <label className="checkbox-label">
                <input type="checkbox" /> Party
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Work
              </label>
              <label className="checkbox-label">
                <input type="checkbox" /> Vacation
              </label>
            </div>

            {/* ACTION BUTTONS */}
            <div className="filter-actions">
              <button className="clear-btn">Clear</button>
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductPage;
