import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://envato-shoebox-0.imgix.net/1491/2cd9-c634-4b60-8f55-a579da993491/P4P_V_001654_1_COLOR_J1.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=2ecfbb4c6c882fc31012c8884a9628fa"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles" style={{color: "white"}}>
          <h1>Top Routes</h1>
          <h2>View our Top Routes!</h2>
        </div>
      </div>
      
      <div className="featuredItem" style={{color: "white"}}>
      
        <img
          src="https://www.autodeal.com.ph/custom/blog-post/header/philippine-highways-and-expressways-5dfc35ec3df34.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
         <h1>Top Cities</h1>
          <h2>View our top city destinations!</h2>
        </div>
      </div>
   
      <div className="featuredItem">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/98/03/84/1000_F_398038481_Uacvc83Xu0sE7CLtIjJrHCIDbwfKlUE5.jpg"
          alt="..."
          className="featuredImg"
        />
        <div className="featuredTitles" style={{color: "black"}}>
          <h1>Offers</h1>
          <h2>Promotional Fares and Discounts!</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
