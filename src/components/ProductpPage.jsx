import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import "../style/productpage.css";
import axios from "axios";

function ProductPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!category) return;
    window.scrollTo(0, 0);
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data.products);
        console.log(res, "Products fetched for category:", category);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, [category]);

  return (
    <section className="Casual-section">
      <h1>{category.toUpperCase()}</h1>
      <div className="casual-content">
        <div className="filter-container">
          {/* Filters */}
          <div className="filter-section">
            <h4>Filter</h4>
            <div className="filter-list1">
              <div> T-shirt </div>
              <div> Shirt </div>
              <div> Jeans </div>
              <div> Hoodie </div>
              <div> Shorts </div>
            </div>
          </div>

          <div className="filter-range">
            <h4>Price</h4>
            <input type="range" min={0} max={10000} className="range-bar" />
            <div className="range-labels">
              <span>₹0</span>
              <span>₹10,000</span>
            </div>
          </div>

          <div className="filter-color">
            <h4>Color</h4>
            <div className="filter-colorall">
              <div
                style={{ backgroundColor: "red" }}
                className="color-circle"
              ></div>
              <div
                style={{ backgroundColor: "blue" }}
                className="color-circle"
              ></div>
              <div
                style={{ backgroundColor: "pink" }}
                className="color-circle"
              ></div>
              <div
                style={{ backgroundColor: "orange" }}
                className="color-circle"
              ></div>
              <div
                style={{ backgroundColor: "black" }}
                className="color-circle"
              ></div>
              <div
                style={{ backgroundColor: "yellow" }}
                className="color-circle"
              ></div>
            </div>
          </div>

          <div className="filter-size">
            <h4>Size</h4>
            <div className="filter-sizeall">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button key={size} className="size-btn">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-dressstyle">
            <h4>Dress Style</h4>
            <div>Casual</div>
            <div>Formal</div>
            <div>Party</div>
            <div>Gym</div>
          </div>

          <div className="apply-filter">
            <button>Apply Filter</button>
          </div>
        </div>

        <div className="product-casual">
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
                  rating={product.rating} product={product} />
              </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPage;







// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ProductCard from "./ProductCard";
// import { useNavigate } from "react-router-dom";
// import "../style/productpage.css";
// import axios from "axios";
// function ProductPage() {
//   const navigate= useNavigate();
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (!category) return;
//     window.scrollTo(0, 0);
//     axios 
//     .get(`https://dummyjson.com/products/category/${category}`)
//     .then((res)=>{
//       setProducts(res.data.products);
//     })
//       .catch((err)=>{console.error("API error:", err);
//     });
//   }, [category]); 

//   return (
//     <section className="Casual-section">
//       <h1>{category.toUpperCase()}</h1>
//       <div className="casual-content">
//         <div className="filter-container">
//           {/* Filters */}
//           <div className="filter-section">
//             <h4>Filter</h4>
//             <div className="filter-list1">
//               <div> T-shirt </div>
//               <div> Shirt </div>
//               <div> Jeans </div>
//               <div> Hoodie </div>
//               <div> Shorts </div>
//             </div>
//           </div>

//           <div className="filter-range">
//             <h4>Price</h4>
//             <input type="range" min={0} max={10000} className="range-bar" />
//             <div className="range-labels">
//               <span>₹0</span>
//               <span>₹10,000</span>
//             </div>
//           </div>

//           <div className="filter-color">
//             <h4>Color</h4>
//             <div className="filter-colorall">
//               <div style={{ backgroundColor: "red" }} className="color-circle"></div>
//               <div style={{ backgroundColor: "blue" }} className="color-circle"></div>
//               <div style={{ backgroundColor: "pink" }} className="color-circle"></div>
//               <div style={{ backgroundColor: "orange" }} className="color-circle"></div>
//               <div style={{ backgroundColor: "black" }} className="color-circle"></div>
//               <div style={{ backgroundColor: "yellow" }} className="color-circle"></div>
//             </div>
//           </div>

//           <div className="filter-size">
//             <h4>Size</h4>
//             <div className="filter-sizeall">
//               {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
//                 <button key={size} className="size-btn">
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="filter-dressstyle">
//             <h4>Dress Style</h4>
//             <div>Casual</div>
//             <div>Formal</div>
//             <div>Party</div>
//             <div>Gym</div>
//           </div>

//           <div className="apply-filter">
//             <button>Apply Filter</button>
//           </div>
//         </div>

//         <div className="product-casual">
//           {products.map((product) => (
//             <div key={product.id} className="product-wrapper" onClick={() => navigate("/about", {state:{product}})}>
//               <ProductCard
//                 name={product.title}
//                 price={product.price}
//                 original={product.originalPrice || product.price}
//                 image={product.thumbnail}
//                 rating={product.rating}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProductPage;


