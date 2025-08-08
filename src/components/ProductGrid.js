import React from "react";
import ProductCard from "./ProductCard";

/**
 * Generic grid to show product list. Keep CSS names consistent.
 */
function ProductGrid({ products = [], onProductClick = () => {}, onAddToCart = null }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
