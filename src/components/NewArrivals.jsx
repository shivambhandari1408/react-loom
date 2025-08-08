import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../style/NewArrivals.css";
import { useNavigate } from "react-router-dom";

function NewArrivals() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("API ERROR:", err));
  }, []);

  return (
    <section className="new-arrivals-section" id="new-arrivals-section">
      <h1 className="new-arrivals-heading">NEW ARRIVALS</h1>
      <div className="NewArrivals-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate("/about", { state: { product } })}
            showAddToCart={false}
          />
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import "../style/NewArrivals.css";
// import { useNavigate } from "react-router-dom";

// function NewArrivals() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products?limit=10")
//       .then((res) => {
//         setProducts(res.data.products);
//       })
//       .catch((err) => console.error("API ERROR:", err));
//   }, []);

//   return (
//     <section className="new-arrivals-section">
//       <h1 className="new-arrivals-heading">NEW ARRIVALS</h1>
//       <div className="NewArrivals-grid">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onClick={() => navigate("/about", { state: { product } })}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default NewArrivals;
