import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/bag.css";
import { useNavigate } from "react-router-dom";

function BagPage({ setCartCount }) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const response = await Promise.all(
          savedCart.map((item) =>
            axios.get(`https://dummyjson.com/products/${item.id}`)
          )
        );
        const cartData = response.map((res, index) => ({
          ...res.data,
          quantity: savedCart[index].quantity || 1,
          color: "blue",
          size: "zz",
          price: res.data.price,
          originalPrice: res.data.price,
        }));
        setCartItems(cartData);
        updateCartCount(cartData);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  const updateCartCount = (items) => {
    const total = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  };

  const incrementQty = (id) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateCartCount(updated);
      return updated;
    });
  };

  const decrementQty = (id) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      updateCartCount(updated);
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      updateCartCount(updated);
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const newCart = savedCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return updated;
    });
  };

  return (
    <div className="bag-container">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h1>Your Cart is empty</h1>
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
          <h2>Your cart</h2>
          <div className="bag-header">
            <span>Product</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          {cartItems.map((item) => (
            <div className="bag-item" key={item.id}>
              <div className="product-info-bag">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{
                    width: "110px",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "2px",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                  }}
                  onClick={() =>
                    navigate("/about", { state: { product: item } })
                  }
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div>
                  <h4 className="h4">{item.title}</h4>
                  <div className="item-rupess">
                    <p className="striked">
                      Rs.{item.originalPrice.toFixed(2)}
                    </p>
                    <p>Rs.{item.price.toFixed(2)}</p>
                  </div>
                  <p>Color: {item.color}</p>
                  <p>Size: {item.size}</p>
                  <span className="discount-label">Discount</span>
                </div>
              </div>

              <div className="quantity-update">
                <div className="quantity-control-bag">
                  <button
                    onClick={() => decrementQty(item.id)}
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontSize: "18px",
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => incrementQty(item.id)}
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontSize: "18px",
                    }}
                  >
                    +
                  </button>
                </div>
                <span
                  className="delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑
                </span>
              </div>
              <div className="total-price">
                <p className="striked">
                  Rs.{(item.originalPrice * item.quantity).toFixed(2)}
                </p>
                <p>Rs.{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default BagPage;
