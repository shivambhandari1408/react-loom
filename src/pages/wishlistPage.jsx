import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../components/wishlistContext";
import ProductCard from "../components/ProductCard";
import "../style/wishlistPage.css";
import "../style/bag.css"; // to reuse empty-cart styles

function WishlistPage() {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  return (
    <section className="casual-section">
      {wishlist.length === 0 ? (
        <div className="empty-cart">
          <h1>Your Wishlist is empty</h1>
          <img
            src="src/assets/Empty_Cart.webp"
            alt="empty-cart"
            className="empty-cart-image"
          />
          <button
            className="continue-shopping-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <h1>MY WISHLIST</h1>
          <div className="casual-content">
            <div className="product-casual">
              {wishlist.map((product) => (
                  <ProductCard
                    name={product.title}
                    product={product}
                  />
                
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default WishlistPage;
