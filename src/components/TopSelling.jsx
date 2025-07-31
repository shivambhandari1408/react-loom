import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import "../style/TopSelling.css";
import { useNavigate } from "react-router-dom";

function TopSelling() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!products) return;
    axios
      .get("https://dummyjson.com/products/category/smartphones?limit=10")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.error("AAPI ERROR:", err));
  }, []);

  return (
    <section className="top-selling-section">
      <h1 className="top-selling-heading">TOP SELLING</h1>
      <div className="top-selling-grid">
        {products.map((product) => (
            <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            original={product.originalPrice || product.price}
            image={product.thumbnail}
            rating={product.rating}
            product={product} // ✅ Pass full product to support WishlistIcon
            onClick={() => navigate("/about", { state: { product } })} // ✅ Move click handler to ProductCard
          />
        ))}
      </div>
    </section>
  );
}

export default TopSelling;




// import React from "react";
// import image4 from "../assets/image4.png";
// import image1 from "../assets/image1.png";
// import image3 from "../assets/image3.png";
// import image2 from "../assets/image2.png";
// import ProductCard from "./ProductCard";

// function TopSelling() {
//     const products = [
//     { name: "Checkered Shirt", price: 180, image: image3, rating: "4.5" },
//     { name: "Sleeve Striped T-shirt", price: 130, original: 160, image: image4, rating: "4.5" },   
//     { name: "T-shirt with Tape Details", price: 120, image: image1, rating: "4.5" },
//     { name: "Skinny Fit Jeans", price: 240, original: 260, image: image2, rating: "4.5" },
    
//  ];
//     return(
//         <section className="py-8 px-6 bg-20">
//             <h1 className="text-4xl font-bold text-center text-black mb-8">TOP SELLING</h1>
//             <div className="flex justify-between gap-6 flex-wrap md:flex-nowrap">

//                 {products.map((p,i)=>(
//                     <div key={i} className="w-full md:w-1/4">
//                         <ProductCard {...p} />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
// export default TopSelling;
