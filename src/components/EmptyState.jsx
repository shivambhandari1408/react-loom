import React from "react";

/* * Small reusable empty state component */
export default function EmptyState({ title = "Nothing here", image, buttonText = "Go Home", onButtonClick }) {
  return (
    <div className="empty-cart">
      <h1>{title}</h1>
      {image && <img src={image} alt="empty" className="empty-cart-image" />}
      <button className="continue-shopping-btn" onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
}
