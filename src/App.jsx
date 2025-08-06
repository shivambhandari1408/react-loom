import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './style/App.css';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import ProductPage from './components/ProductpPage';
import About from './pages/about';
import LoginPage from './pages/login';
import BagPage from './pages/bag';
import WishlistPage from './pages/wishlistPage';
import axios from 'axios';
import Home from './pages/Home';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = savedCart.length;
    setCartCount(totalCount);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/data/products.json");
        const data = response?.data;
        setProductList(data);
      } catch (error) {
        console.error('Failed to fetch products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar cartCount={cartCount} isHeroVisible={isHeroVisible} />
      <div ref={heroRef}>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productPage/:category" element={<ProductPage />} />
        <Route path="/about" element={<About setCartCount={setCartCount} allProducts={productList} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bag" element={<BagPage setCartCount={setCartCount} />} />
        <Route path="/wishlist" element={<WishlistPage setCartCount={setCartCount} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
