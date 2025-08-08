import React, { useRef, useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import ProductPage from "./pages/ProductpPage";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import BagPage from "./pages/BagPage";
import WishlistPage from "./pages/WishlistPage";
import AccountPage from "./pages/AccountPage";
import Home from "./pages/home";
import useIntersection from "./hooks/useIntersection";
import { useCart } from "./context/cartContext";

function App() {
  const { cart } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // hero intersection (for Navbar background)
  const heroRef = useRef(null);
  const isHeroVisible = useIntersection(heroRef, 0.3);

  // scroll to top on route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar cartCount={cart.length} isHeroVisible={isHeroVisible} />
      {/* anchor for intersection observer */}
      <div ref={heroRef} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productPage/:category" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/bag" element={<BagPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={ isLoggedIn ? (
        <Navigate to="/account" />
         ) : (
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/account" 
        element={isLoggedIn ? <AccountPage /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;



// import React, { useEffect, useState, useRef } from 'react';
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import './style/App.css';

// import Navbar from './components/navbar';
// import Footer from './components/footer';
// import ProductPage from './components/ProductpPage';
// import About from './pages/about';
// import LoginPage from './pages/login';
// import BagPage from './pages/bag';
// import WishlistPage from './pages/wishlistPage';
// import AccountPage from './pages/AccountPage'; // ✅ Import this!
// import axios from 'axios';
// import Home from './pages/home';

// function App() {
//   const [cartCount, setCartCount] = useState(0);
//   const [productList, setProductList] = useState([]);
//   const location = useLocation();
//   const [isHeroVisible, setIsHeroVisible] = useState(true);
//   const heroRef = useRef(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Controls login state

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsHeroVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );

//     if (heroRef.current) observer.observe(heroRef.current);
//     return () => {
//       if (heroRef.current) observer.unobserve(heroRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const totalCount = savedCart.length;
//     setCartCount(totalCount);
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("/data/products.json");
//         const data = response?.data;
//         setProductList(data);
//       } catch (error) {
//         console.error('Failed to fetch products:', error.message);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <Navbar cartCount={cartCount} isHeroVisible={isHeroVisible} />
//       <div ref={heroRef}> </div>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/productPage/:category" element={<ProductPage />} />
//         <Route path="/about" element={<About setCartCount={setCartCount} allProducts={productList} />} />
//         <Route path="/bag" element={<BagPage setCartCount={setCartCount} />} />
//         <Route path="/wishlist" element={<WishlistPage setCartCount={setCartCount} />} />

//         {/* ✅ Login route with conditional redirect */}
//         <Route
//           path="/login"
//           element={
//             isLoggedIn ? (
//               <Navigate to="/account" />
//             ) : (
//               <LoginPage setIsLoggedIn={setIsLoggedIn} />
//             )
//           }
//         />

//         {/* ✅ Protected account route */}
//         <Route
//           path="/account"
//           element={
//             isLoggedIn ? <AccountPage /> : <Navigate to="/login" />
//           }
//         />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;
