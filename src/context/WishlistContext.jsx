import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  // helper functions
  const isWishlisted = (product) => wishlist.some((p) => p.id === product.id);
  const toggleWishlist = (product) =>
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id) ? prev.filter((p) => p.id !== product.id) : [...prev, product]
    );
  const removeFromWishlist = (id) => setWishlist((prev) => prev.filter((p) => p.id !== id));

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist, isWishlisted, toggleWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

// import React, { createContext, useContext, useEffect, useState } from "react";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState(() => {
//     const saved = localStorage.getItem("wishlist");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   return (
//     <WishlistContext.Provider value={{ wishlist, setWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => {
//   const { wishlist, setWishlist } = useContext(WishlistContext);

//   const isWishlisted = (product) => {
//     return wishlist.some((item) => item.id === product.id);
//   };

//   const toggleWishlist = (product) => {
//     setWishlist((prev) => {
//       const exists = prev.some((item) => item.id === product.id);
//       return exists
//         ? prev.filter((item) => item.id !== product.id)
//         : [...prev, product]; // ✅ Store full object
//     });
//   };
//   const removeFromWishlist = (id) => {
//     setWishlist((prev)=>prev.filter((item)=>item.id !==id));
//   };

//   return { wishlist, isWishlisted, toggleWishlist, removeFromWishlist };
// };
