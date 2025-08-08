import React from "react";
import { useWishlist } from "../context/WishlistContext";

/**
 * Heart icon - toggles wishlist state
 */
function WishlistIcon({ product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const handleClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <span className="wishlist-icon" onClick={handleClick} style={{ cursor: "pointer", fontSize: "1.5rem" }}>
      {isWishlisted(product) ? "❤️" : "♡"}
    </span>
  );
}

export default WishlistIcon;


// import React from "react";
// import { useWishlist } from "../components/wishlistContext";

// function WishlistIcon({ product }) {
//   const { isWishlisted, toggleWishlist } = useWishlist();

//   const handleClick = (e) => {
//     e.stopPropagation(); 
//     toggleWishlist(product);
//   };

//   return (
//     <span className="wishlist-icon" onClick={handleClick} style={{ cursor: "pointer", fontSize: "1.5rem" }}>
//       {isWishlisted(product) ? "❤️" : "♡"}
//     </span>
//   )
// }

// export default WishlistIcon;
