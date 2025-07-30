import wishlistIcon from "../pages/WishlistIcon";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/about.css";
import WishlistIcon from "../pages/WishlistIcon";

function About({ setCartCount, allProducts }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  useEffect(() => {
    if (product && allProducts.length > 0) {
      const related = allProducts
        .filter(
          (item) =>
            item.category?.toLowerCase() === product.category?.toLowerCase() &&
            item.id !== product.id
        )
        .slice(0, 4);
      setRelatedProduct(related);
    }
  }, [product, allProducts]);

  const handleAddToCart = () => {
    if (product) {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = existingCart.find((item) => item.id === product.id);
      if (!existingItem) {const newItem = {
          id: product.id,
          quantity,
          color: selectedColor || "blue",
          size: selectedSize || "M",
        };
        localStorage.setItem("cart", JSON.stringify([...existingCart, newItem]));
        setCartCount((prev) => prev + quantity);
      }
      navigate("/bag");
    }
  };

  if (!product) return <h2>No product data found</h2>;

  return (
    <section className="about">
      <div className="about-top-side">
        <div className="about-image">
          <div className="left-side">
            <img src={product.thumbnail} alt={product.title} />
            <img src={product.thumbnail} alt={product.title} />
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className="right-side">
            <img src={product.thumbnail} alt={product.title} />
            <WishlistIcon product={product} />
          </div>
        </div>

        <div className="review-side">
          <h2>{product.title}</h2>
          <div className="rating-section">
            <span className="stars">★</span>
            <span className="rating-score">{product.rating}</span>
          </div>

          <div className="price-section">
            <span className="new-price">₹{product.price}</span>
            {product.originalPrice && product.originalPrice !== product.price && (
              <>
                <span className="old-price">₹{product.originalPrice}</span>
                <span className="discount">
                  -
                  {Math.round(
                    ((product.originalPrice - product.price) / product.originalPrice) * 100
                  )}
                  %
                </span>
              </>
            )}
          </div>
          <p className="description">
            {product.description || "No description available."}
          </p>

          <div className="color-selector">
            <p>Select Colors</p>
            <div className="colors">
              {["red", "blue", "green"].map((color) => (
                <div
                  key={color}
                  className={`color-circle ${selectedColor === color ? "onn" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          <div className="size-selector">
            <p>Choose Size</p>
            <div className="sizes">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-cart">
            <div className="quantity-control">
              <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => Math.min(10, prev + 1))}>+</button>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="top_reviews">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div className="review_card" key={index}>
              <div className="stars">{"★".repeat(review.stars)}</div>
              <h3>
                {review.reviewerName} <span className="verified">✔</span>
              </h3>
              <p>{review.comment}</p>
              <span className="date">
                Posted on {new Date(review.date).toDateString()}
              </span>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>

      {relatedProduct.length > 0 && (
        <div className="you-may-also-like">
          <h2>You May Also Like</h2>
          <div className="related-products">
            {relatedProduct.map((item) => (
              <div
                key={item.id}
                className="related-product-card"
                onClick={() => navigate("/about", { state: { product: item } })}
              >
                <img src={item.thumbnail} alt={item.title} />
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default About;





// import React, { useState,useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../style/about.css";

// function About({ setCartCount ,allProducts}) {
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProduct, setRelatedProduct] =useState([]);
  
//   const navigate=useNavigate();
//   const location = useLocation();
//   const product = location.state?.product;

//   useEffect(() => {
//     console.log(" product:", product);
//   console.log("allProducts:", allProducts);
//     if (product && allProducts.length > 0) {
//       const related = allProducts
//         .filter((item) => item.category === product.category && item.id !== product.id)
//         .slice(0, 4); // max 4 suggestions
//         console.log(" Related products found:", related);
//       setRelatedProduct(related);
//     }
//   }, [product, allProducts]);

//   const handleAddToCart = () => {
//     if (product) {
//       const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
//       const existingItem = existingCart.find((item) => item.id === product.id);

//       if (!existingItem) {
//         const newItem = {
//           id: product.id,
//           quantity,
//           color: selectedColor || "blue",
//           size: selectedSize || "M",
//         };
//         localStorage.setItem("cart", JSON.stringify([...existingCart, newItem]));
//         setCartCount((prev) => prev + quantity);
//       }
//     }
//   };

//   if (!product) {
//     return <h2>No product data found</h2>;
//   }

//   return (
//     <section className="about">

//       <div className="about-top-side">
//         <div className="about-image">
//           <div className="left-side">
//             <img src={product.thumbnail} alt={product.title} />
//             <img src={product.thumbnail} alt={product.title} />
//             <img src={product.thumbnail} alt={product.title} />
//           </div>
//           <div className="right-side">
//             <img src={product.thumbnail} alt={product.title} />
//           </div>
//         </div>

//         <div className="review-side">
//           <h2>{product.title}</h2>

//           <div className="rating-section">
//             <span className="stars">★</span>
//             <span className="rating-score">{product.rating}</span>
//           </div>

//           <div className="price-section">
//             <span className="new-price">₹{product.price}</span>
//             {product.originalPrice && product.originalPrice !== product.price && (
//               <>
//                 <span className="old-price">₹{product.originalPrice}</span>
//                 <span className="discount">
//                   -
//                   {Math.round(
//                     ((product.originalPrice - product.price) / product.originalPrice) * 100
//                   )}
//                   %
//                 </span>
//               </>
//             )}
//           </div>

//           <p className="description">
//             {product.description || "No description available."}
//           </p>

//           <div className="color-selector">
//             <p>Select Colors</p>
//             <div className="colors">
//               {["red", "blue", "green"].map((color) => (
//                 <div
//                   key={color}
//                   className={`color-circle ${selectedColor === color ? "onn" : ""}`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => setSelectedColor(color)}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           <div className="size-selector">
//             <p>Choose Size</p>
//             <div className="sizes">
//               {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
//                 <button
//                   key={size}
//                   className={`size-button ${selectedSize === size ? "active" : ""}`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="quantity-cart">
//             <div className="quantity-control">
//               <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>−</button>
//               <span>{quantity}</span>
//               <button onClick={() => setQuantity((prev) => Math.min(10, prev + 1))}>+</button>
//             </div>
//             <button className="add-to-cart" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="top_reviews">
//         {product.reviews && product.reviews.length > 0 ? (
//           product.reviews.map((review, index) => (
//             <div className="review_card" key={index}>
//               <div className="stars">{"★".repeat(review.stars)}</div>
//               <h3>
//                 {review.reviewerName} <span className="verified">✔</span>
//               </h3>
//               <p>{review.comment}</p>
//               <span className="date">
//                 Posted on {new Date(review.date).toDateString()}
//               </span>
//             </div>
//           ))
//         ) : (
//           <p>No reviews yet.</p>
//         )}
//       </div>
//       {relatedProduct.length > 0 && (
//         <div className="you-may-also-like">
//           <h2>You May Also Like</h2>
//           <div className="related-products">
//             {relatedProduct.map((item) => (
//               <div
//                 key={item.id}
//                 className="related-product-card"
//                 onClick={() => navigate("/about", { state: { product: item } })}
//               >
//                 <img src={item.thumbnail} alt={item.title} />
//                 <h4>{item.title}</h4>
//                 <p>₹{item.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default About;








// import React, {useState} from "react";
// import { useLocation } from "react-router-dom";
// import "../style/about.css";

// function About( {setCartCount}) {
//   const [selectedColor, setSelectedColor]= useState(null);
//   const [selectedSize, setSelectedSize]= useState(null);
//   const [quantity, setQuantity] = useState(1)
//   const location = useLocation();
//   const product = location.state?.product;
//   const handleAddToCart = ()=>{
//     if(product){
//       const existingCart= JSON.parse(localStorage.getItem("cart")) || [];
//       const existingItem =existingCart.find((item)=> item.id===product.id);

//       if(!existingItem){
//         const newItem= {
//           id:product.id,
//           quantity,
//           color:selectedColor || "blue",
//           size: selectedSize || "M",
//         };
//         localStorage.setItem("cart",JSON.stringify([...existingCart,newItem]));
//         setCartCount((prev)=> prev + quantity);
//       }
     
//     }
//   } 

//   if (!product) {
//     return <h2>No product data found</h2>;
//   }

//   return (
//     <section className="about">
//       <div className="about-top-side">

//         <div className="about-image">
//           <div className="left-side">
//           <img src={product.thumbnail} alt={product.title} />
//           <img src={product.thumbnail} alt={product.title} />
//           <img src={product.thumbnail} alt={product.title} />
//          </div>
//         <div className="right-side">
//          <img src={product.thumbnail} alt={product.title} />
//         </div>
//         </div>
//         <div className="review-side">
//           <h2>{product.title}</h2>

//           <div className="rating-section">
//             <span className="stars">★</span>
//             <span className="rating-score">{product.rating}</span>
//           </div>

//           <div className="price-section">
//             <span className="new-price">₹{product.price}</span>
//             {product.originalPrice && product.originalPrice !== product.price && (
//               <>
//                 <span className="old-price">₹{product.originalPrice}</span>
//                 <span className="discount">
//                   -
//                   {Math.round(
//                     ((product.originalPrice - product.price) / product.originalPrice) * 100
//                   )}
//                   %
//                 </span>
//               </>
//             )}
//           </div>

//           <p className="description">
//             {product.description || "No description available."}
//           </p>

//           <div className="color-selector">
//             <p>Select Colors</p>
//             <div className="colors">
//               {["red", "blue", "green"].map((color)=>(
//                 <div
//                 key={color}
//                 className={`color-circle ${selectedColor=== color ? "onn":""}`}
//                 style= {{ backgroundColor :color}}
//                 onClick={() => setSelectedColor(color)}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           <div className="size-selector">
//             <p>Choose Size</p>
//             <div className="sizes">
//               {["XS","S","M","L","XL","XXL"].map((size)=>(
//               <button
//               key={size}
//               className= {`size-button  ${selectedSize===size ? "active":""}`}
//               onClick={()=> setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))} 
//             </div>
//           </div>

//           <div className="quantity-cart">
//             <div className="quantity-control">
//               <button onClick={()=> setQuantity(prev=> Math.max(1, prev -1))}>−</button>
//               <span>{quantity}</span>
//               <button onClick={()=> setQuantity(prev=> Math.min(10, prev +1))}>+</button>
//             </div>
//             <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//           </div>
//         </div>
//       </div>

//       <div className="top_reviews">
//         {product.reviews && product.reviews.length > 0 ? (
//           product.reviews.map((review, index) => (
//           <div className="review_card" key={index}>
//             <div className="stars">{"★".repeat(review.stars)}</div>
//             <h3>
//               {review.reviewerName} <span className="verified">✔</span>
//               </h3>
//               <p>{review.comment}</p>
//               <span className="date"> Posted on {new Date(review.date).toDateString()}</span>
//               </div>
//               ))
//             )
//             :(
//             <p>No reviews yet.</p>
//             )}
//             </div>
//             </section>
//             );
//           }
          

// export default About;

















