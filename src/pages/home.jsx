import React from "react";
import Hero from "../components/Hero";
import BrandStripe from "../components/brandstrip";
import NewArrivals from "../components/NewArrivals";
import NewAndPopular from "../components/NewAndPopular";
import Browse from "../components/Browse";

const Home = () => (
  <div>
    <div id="hero-section"><Hero /></div>
    <BrandStripe />
    <div id="new-arrivals-section"><NewArrivals /></div>
    <div id="new-and-popular-section"><NewAndPopular /></div>
    <Browse />
  </div>
);

export default Home;


// import React from 'react';
// import Hero from '../components/hero';
// import BrandStripe from '../components/brandstrip';
// import NewArrivals from '../components/NewArrivals';
// import NewAndPopular from '../components/NewAndPopular'; 
// import Browse from '../browse';

// const Home = () => {
//     return (
//         <div>
//             <div id="hero-section">
//                 <Hero />
//             </div>
//             <BrandStripe />
//             <div id="new-arrivals-section"><NewArrivals /></div>
//             <div id="new-and-popular-section"><NewAndPopular /></div> 
//             <Browse />
//         </div>
//     );
// };

// export default Home;
