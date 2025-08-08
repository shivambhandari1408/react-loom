import React from "react";
import "../style/brandstrip.css";

const BrandStripe = () => {
  const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'CALVIN KLIEN'];
  return (
    <div className="brand-strip">
      {brands.map((b, i) => <span key={i}>{b}</span>)}
    </div>
  );
};

export default BrandStripe;


// import React from "react";
// import "../style/brandstrip.css";
 
// const BrandStripe = () => {
//   const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'CALVIN KLIEN'];

//   return (
//     <div className="brand-strip">
//       {brands.map((brand, index) => (
//         <span key={index}>{brand}</span>
//       ))}
//     </div>
//   );
// };

// export default BrandStripe;
