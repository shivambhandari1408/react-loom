import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const { wishlist, setWishlist } = useContext(WishlistContext);

  const isWishlisted = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      return exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  return { wishlist, isWishlisted, toggleWishlist };
};



// import React , {createContext, useContext, useState,useEffect, Children} from "react";

// const WishlistContext= createContext();
//  export const WishlistProvider = ({Children}) => {
//     const [wishlist, setWishlist] = useState(()=>{
//         const stored =localStorage.getItem("wishlist");
//         return stored ? JSON.parse(stored) : [];
//     });

//     useEffect (()=> {
//         localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     }, [wishlist]);

//     const toggleWishlist=(product) => {
//         setWishlist((prev)=>{
//             const exists= prev.find((item )=> item.id ===product.id);
//             return exists ? prev.filter((item)=>item.id !==product.id)
//             : [...prev, product];
//         })
//     };
//     const isWishlisted = (id)=> wishlist.some((item)=> item.id === id );

//     return (
//         <WishlistContext.Provider value={{ wishlist, toggleWishlist,isWishlisted}}>
//             {Children}
//         </WishlistContext.Provider>
//     );
//  };
//  export const useWishlist =() => useContext(WishlistContext);