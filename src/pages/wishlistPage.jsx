import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../components/wishlistContext";
import ProductCard from "../components/ProductCard";
import "../style/productpage.css";
import "../style/bag.css"; // to reuse empty-cart styles

function WishlistPage() {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  return (
    <section className="casual-section">
      <h1>MY WISHLIST</h1>
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
        <div className="casual-content">
          <div className="product-casual">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="product-wrapper"
                onClick={() => navigate("/about", { state: { product } })}
              >
                <ProductCard
                  name={product.title}
                  price={product.price}
                  original={product.originalPrice || product.price}
                  image={product.thumbnail}
                  rating={product.rating}
                  product={product}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default WishlistPage;
