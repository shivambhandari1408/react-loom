import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []); // store {id, quantity, color?, size?}

  const addToCart = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].quantity = (copy[idx].quantity || 1) + (item.quantity || 1);
        return copy;
      }
      return [...prev, { id: item.id, quantity: item.quantity || 1, color: item.color, size: item.size }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity } : p)));
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
