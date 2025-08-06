import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../components/wishlistContext";
import ProductCard from "../components/ProductCard";
import "../style/wishlistPage.css";
import "../style/bag.css"; // to reuse empty-cart styles

function WishlistPage({setCartCount}) {
  const navigate = useNavigate();
  const {wishlist, removeFromWishlist}=useWishlist();

  const handleAddToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingIndex = savedCart.findIndex((item)=> item.id === product.id);
    if (existingIndex !== -1) {
      savedCart[existingIndex].quantity += 1; // Increment quantity if already exists
    } else {
      savedCart.push({ id: product.id, quantity: 1,  }); // Add new item
    }
    localStorage.setItem("cart", JSON.stringify(savedCart));

    const total = savedCart.length;
    setCartCount(total);
    removeFromWishlist(product.id);
  };

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
                    showAddToCart={true}
                    showRating={false}
                    onAddToCart={handleAddToCart}
                    onClick={()=> navigate("/about",{ state: { product } })}
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
