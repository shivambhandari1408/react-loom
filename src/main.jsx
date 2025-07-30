import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { WishlistProvider } from './components/wishlistContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <WishlistProvider>
      <App />
    </WishlistProvider>
  </BrowserRouter>
);









































// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
