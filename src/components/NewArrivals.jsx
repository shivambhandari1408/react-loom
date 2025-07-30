import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../style/NewArrivals.css";
import { useNavigate } from "react-router-dom";

function NewArrivals() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!products) return;
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.error("AAPI ERROR:", err));
  }, []);

  return (
    <section id="new-arrivals-section" className="new-arrivals-section">
      <h1 className="new-arrivals-heading">NEW ARRIVALS</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-wrapper"
            onClick={() => navigate("/about", { state: { product } })}
          >
            <ProductCard
              name={product.title}
              price={product.price}
              original={product.originalPrice || product.price}
              image={product.thumbnail}
              rating={product.rating}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;




// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import "../style/NewArrivals.css";

// function NewArrivals() {
//   const [products, setProducts] = useState([]);
//   console.log(products, "Productss");
  

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data?.products);
//       })
//       .catch((err) => console.error("API error:", err));
//   }, []);

//   return (
//     <section className="new-arrivals-section">
//       <h1 className="new-arrivals-heading">NEW ARRIVALS</h1>
//       <div className="product-grid">
//         {products?.map((product) => (
//           <div key={product.id} className="product-wrapper">
//             <ProductCard
//               name={product.title}
//               price={product.price}
//               original={product.originalPrice || (product.price )}
//               image={product.thumbnail}
//               rating={product.rating}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default NewArrivals;










// import React from "react";
// import image1 from "../assets/image1.png";
// import image2 from "../assets/image2.png";
// import image3 from "../assets/image3.png";
// import image4 from "../assets/image4.png";
// import ProductCard from "./ProductCard";
// import "../style/NewArrivals.css"

// function NewArrivals() {
//   const products = [
//     { name: "T-shirt with Tape Details", price: 120, image: image1, rating: "4.5" },
//     { name: "Skinny Fit Jeans", price: 240, original: 260, image: image2, rating: "4.5" },
//     { name: "Checkered Shirt", price: 180, image: image3, rating: "4.5" },
//     { name: "Sleeve Striped T-shirt", price: 130, original: 160, image: image4, rating: "4.5" }
//   ];

//   return (
//     <section className="new-arrivals-section">
//       <h1 className="new-arrivals-heading">NEW ARRIVALS</h1>
//       <div className="product-grid">
//         {products.map((p, i) => (
//           <div key={i} className="product-wrapper">
//             <ProductCard {...p} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default NewArrivals;

























