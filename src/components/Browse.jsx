
import React from "react";
import casual from "../assets/casual.png";
import formal from "../assets/formal.png";
import party from "../assets/party.png";
import gym from "../assets/gym.png";
import { useNavigate } from "react-router-dom";
import "../style/browse.css";

function Browse() {
  const navigate = useNavigate();
  const handleNavigation = (category) => navigate(`/productPage/${category.toLowerCase()}`);

  return (
    <section className="browse-section">
      <h2 className="browse-heading">Browse by Dress Style</h2>
      <div className="browse-rows">
        <div className="browse-row row-1">
          <div className="browse-card" onClick={() => handleNavigation("Mobile-Accessories")}>
            <img src={casual} alt="Casual" className="card-image" />
            <div className="card-title">Casual</div>
          </div>
          <div className="browse-card" onClick={() => handleNavigation("tops")}>
            <img src={formal} alt="Formal" className="card-image" />
            <div className="card-title">Formal</div>
          </div>
        </div>

        <div className="browse-row row-2">
          <div className="browse-card" onClick={() => handleNavigation("smartphones")}>
            <img src={party} alt="Party" className="card-image" />
            <div className="card-title">Party</div>
          </div>
          <div className="browse-card" onClick={() => handleNavigation("kitchen-accessories")}>
            <img src={gym} alt="GYM" className="card-image" />
            <div className="card-title">Gym</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Browse;


// import React from "react";
// import casual from "./assets/casual.png";
// import formal from "./assets/formal.png";
// import party from "./assets/party.png";
// import gym from "./assets/gym.png";
// import { useNavigate } from "react-router-dom";
// import "./style/browse.css";

// function Browse() {
//   const navigate = useNavigate();
//   const handleNavigation = (category) => {
//     navigate(`/ProductPage/${category}`);
//     };
//   return (
//     <section className="browse-section">
//       <h2 className="browse-heading">Browse by Dress Style</h2>
//       <div className="browse-rows">
//         {/* Row 1 */}
//         <div className="browse-row row-1">
//           <div className="browse-card" 
//             onClick={()=> handleNavigation("Mobile-Accessories")}>
//             <img src={casual} alt="Casual" className="card-image"  />
//             <div className="card-title">Casual</div>
//           </div>
//           <div className="browse-card"
//             onClick={()=> handleNavigation("tops")}>
//             <img src={formal} alt="Formal" className="card-image" />
//             <div className="card-title">Formal</div>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="browse-row row-2">
//           <div className="browse-card"
//           onClick={()=> handleNavigation("smartphones")}>
//             <img src={party} alt="Party" className="card-image" />
//             <div className="card-title">Party</div>
//           </div>
//           <div className="browse-card"
//           onClick={()=> handleNavigation("kitchen-accessories")}>
//             <img src={gym} alt= "GYM" className="card-image" />
//             <div className="card-title">Gym</div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Browse;


