import React, { useEffect, useState } from "react";
import "../style/navbar.css";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "./wishlistContext";

function Navbar({ cartCount, className = "" }) {
  const navigate = useNavigate();
  const {wishlist} = useWishlist()

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);


  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevScrollY && currentY > 80) {
        setHidden(true); // Scrolling down
      } else {
        setHidden(false); // Scrolling up
      }
      setPrevScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const categories = ["NEW ARRIVALS", "TOP SELLING" ,"CASUAL", "FORMAL", "GYM", "DRESS"]

  return (
    <nav className={`navbar ${hidden ? "slide-up" : ""} ${className}`}>
      {/* Menu Icon with Dropdown */}
      <div className="menu-wrapper">
        <img
          src="https://www.svgrepo.com/show/491652/line-3.svg"
          alt="menu" 
          className="three-line"
        />
        <div className="menu-dropdown">
          {categories.map((category, index) => {
            const sectionId = category.toLowerCase().replace(/\s+/g, "-") + "-section";
            return (
              <div
                key={index}
                className="menu-item"
                onClick={() => {
                  const section = document.getElementById(sectionId);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {category}
              </div>
            );
          })}
        </div>
      </div>
      
      <img 
      src="https://loomfashion.co.in/assets/Loom_Logo-BKBcDFpy.png" 
      alt="loom-img" 
      className="nav-logo" />

      <input
       type="text"
       placeholder="⌕  search product..." 
       className="search-box"
       />

      <div className="emoji-pic">
        <div className="cart-icon" onClick={() => navigate("/wishlist")} > ♡ {wishlist.length > 0 && <span className="cart-badge">{wishlist.length}</span>}
          </div>
          <div className="cart-icon" onClick={() => navigate("/bag")}>
            🛒{cartCount > 0 && (<span className="cart-badge">{cartCount}</span>)}
            </div>
            <div className="cart-icon" onClick={() => navigate("/login")}>👤
            </div>
            </div>
    </nav>
  );
}

export default Navbar;
