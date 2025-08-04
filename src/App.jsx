import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { WishlistProvider } from './components/wishlistContext';


import './style/App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import BrandStripe from './components/brandstrip';
import NewArrivals from './components/NewArrivals';
import TopSelling from './components/TopSelling';
import Browse from './browse';
import Footer from './components/footer';
import ProductPage from './components/ProductpPage';
import About from './pages/about';
import LoginPage from './pages/login';
import BagPage from './pages/bag';
import WishlistPage from './pages/wishlistPage';
import axios from 'axios';
import Home from './pages/home';


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [productList, setProductList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = savedCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  }, []);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/data/products.json");
      console.log(response?.data, "resposb");
      
      const data = await response?.data
      setProductList(data);
    } catch (error) {
      console.error('Failed to fetch products:', error.message);
    }
  };

  fetchProducts();
}, []);


  return (
    <>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productPage/:category" element={<ProductPage />} />
        <Route path="/about" element={<About setCartCount={setCartCount} allProducts={productList} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bag" element={<BagPage setCartCount={setCartCount} />} />
        <Route path ="/wishlist" element={<WishlistPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


