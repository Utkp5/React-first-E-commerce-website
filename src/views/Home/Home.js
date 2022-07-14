import React from "react";
import './Home.css';
import Navbar from "../../components/navbar/navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="Home_container">
        <p className="container_p">Spring / Summer Season</p>
        <span id="span_1">up to</span>
        <span id="span_2">50% OFF</span>
        <p className="container_p1">
          STARTING AT<span id="span_3">$19</span>
        </p>
        <button className="container_button">SHOP NOW</button>
      </div>
      <div className="shoeImg">
        <img
          className="shoeImage"
          src="https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/homepage/18/white-shoes.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
