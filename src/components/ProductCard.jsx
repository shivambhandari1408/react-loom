
import React from "react";
import "../style/ProductCard.css";
import WishlistIcon from "./WishlistIcon";

/**
 * Reusable Product card
 * Props: product, onClick, onAddToCart, showRating, showAddToCart
 */
function ProductCard({
  product = {},
  onClick = () => {},
  onAddToCart = null,
  showRating = true,
  showAddToCart = false,
}) {
  const finalProduct = {
    id: product.id || Date.now(),
    name: product.title || product.name || "Unnamed Product",
    price: product.price || 0,
    original: product.originalPrice || product.price,
    image: product.thumbnail || product.image || "fallback.jpg",
    rating: product.rating || 0,
  };

  return (
    <div className="product-card" onClick={onClick}>
      <div className="image-container">
        <img src={finalProduct.image} alt={finalProduct.name} className="product-image" />
        <div onClick={(e) => e.stopPropagation()}>
          <WishlistIcon product={product} />
        </div>
      </div>

      <div className="product-info">
        <h2 className="product-name">{finalProduct.name}</h2>
        <div className="product-pricing">
          <span className="current-price">₹{finalProduct.price}</span>
          {finalProduct.original !== finalProduct.price && (
            <span className="original-price">{finalProduct.original}</span>
          )}
        </div>
        {showRating && (
          <div className="product-rating">⭐ {finalProduct.rating}</div>
        )}
      </div>

      {showAddToCart && (
        <div className="add-to-cart-container">
          <button
            className="add-to-cart-btn"
            onClick={(e) => {
              e.stopPropagation();
              if (onAddToCart) onAddToCart(finalProduct);
            }}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;






// import React from "react";
// import "../style/ProductCard.css";
// import WishlistIcon from "../pages/WishlistIcon";

// function ProductCard({
//   name,
//   price,
//   original,
//   image,
//   rating,
//   product = {},
//   onClick,
//   onAddToCart,
//   showRating = true,
//   showAddToCart = false,
// }) {
//   const finalProduct = {
//     id: product.id || Date.now(),
//     name: name || product.name || product.title || "Unnamed Product",
//     price: price || product.price || 0,
//     original: original || product.original || product.originalPrice || price,
//     image: image || product.image || product.thumbnail || "fallback.jpg",
//     rating: rating || product.rating || 0,
//   };

//   return (
//     <div className="product-card" onClick={onClick}>
//       <div className="image-container">
//         <img
//           src={finalProduct.image}
//           alt={finalProduct.name}
//           className="product-image"
//         />
//         {/* Prevent navigation when clicking heart */}
//         <div onClick={(e) => e.stopPropagation()}>
//           <WishlistIcon product={product} />
//         </div>
//       </div>

//       <div className="product-info">
//         <h2 className="product-name">{finalProduct.name}</h2>
//         <div className="product-pricing">
//           <span className="current-price">₹{finalProduct.price}</span>
//           {finalProduct.original !== finalProduct.price && (
//             <span className="original-price">{finalProduct.original}</span>
//           )}
//         </div>
//         {showRating && (
//           <div className="product-rating">⭐ {finalProduct.rating}</div>
//         )}
//       </div>

//       {showAddToCart && (
//         <div className="add-to-cart-container">
//           <button
//             className="add-to-cart-btn"
//             onClick={(e) => {
//               e.stopPropagation(); // prevent triggering onClick for card
//               if (onAddToCart) onAddToCart(finalProduct);
//             }}
//           >
//             Add to Cart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductCard;
