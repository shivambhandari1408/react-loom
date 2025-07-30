import React from "react";
import "../style/ProductCard.css";
import WishlistIcon from "../pages/WishlistIcon";

function ProductCard({name, price, original, image, rating}){
  const product = {  name, price, original, image, rating };
  console.log(name, price, original, image, rating, 'arpir');

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} className="product-image" />
        <WishlistIcon product={product} />
      </div>
        <div className="product-info">
          <h2 className="product-name">{name}</h2>
          <div className="product-pricing">
            <span className="current-price">₹{price}</span>
            {original && original !== price && (
              <span className="original-price">₹{original}</span>
            )}
          </div>
          <div className="product-rating">⭐ {rating}</div>
        </div>
      </div>
  );
}

export default ProductCard;
