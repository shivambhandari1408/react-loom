import React, { useEffect, useState } from "react";
import "../style/navbar.css";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "./wishlistContext";

function Navbar({ cartCount, className = "", isHeroVisible }) {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevScrollY && currentY > 10) {
        setHidden(true); // Scrolling down
      } else {
        setHidden(false); // Scrolling up
      }
      setPrevScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const categories = [
    "NEW ARRIVALS",
    "NEW AND POPULAR",
    "MENS-SHIRTS",
    "WOMENS-DRESSES",
    "TOPS",
    "MENS-SHOES",
    "WOMENS-SHOES",
    "WOMENS-BAGS",
    "WOMENS-JEWELLERY",
    "SUNGLASSES",
    "MENS-WATCHES",
    "WOMENS-WATCHES",
    "BEAUTY",
  ];

  const handleCategoryClick = (category) => {
    if (category === "NEW ARRIVALS" || category === "NEW AND POPULAR") {
      const targetId =
        category === "NEW ARRIVALS"
          ? "new-arrivals-section"
          : "new-and-popular-section";

      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/productPage/${category.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  return (
    <nav
      className={`navbar ${hidden ? "slide-up" : ""} ${
        !isHeroVisible ? "solid-bg" : "transparent-bg"
      } ${className}`}
    >
      {/* Menu Icon with Dropdown */}
      <div className="menu-wrapper">
        <img
          src="https://www.svgrepo.com/show/491652/line-3.svg"
          alt="menu"
          className="three-line"
        />
        <div className="menu-dropdown">
          {categories.map((category, index) => (
            <div
              key={index}
              className="menu-item"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <img
        src="https://loomfashion.co.in/assets/Loom_Logo-BKBcDFpy.png"
        alt="loom-img"
        className="nav-logo"
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (window.location.pathname !== "/") {
            navigate("/", { replace: false });
            setTimeout(() => {
              const hero = document.getElementById("hero-section");
              if (hero) hero.scrollIntoView({ behavior: "smooth" });
            }, 100);
          } else {
            const hero = document.getElementById("hero-section");
            if (hero) hero.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />

      <input
        type="text"
        placeholder="⌕  search product..."
        className="search-box"
      />

      <div className="emoji-pic">
        <div
          className="cart-icon"
          onClick={() => navigate("/wishlist")}
        >
          ♡
          {wishlist.length > 0 && (
            <span className="cart-badge">{wishlist.length}</span>
          )}
        </div>
        <div
          className="cart-icon"
          onClick={() => navigate("/bag")}
        >
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>
        <div
          className="cart-icon"
          onClick={() => navigate("/login")}
        >
          👤
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
