import React from "react";
import "./navbar.css";
import logoo from '../../assets/images/logo1.png'

function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <div><img className="logo" src={logoo} alt="" /></div>
        <div>
          <a className="navbar_a" id="navbar_a1" href="/">Home</a>
          <a className="navbar_a" id="navbar_a2" href="/Login">Login</a>
          <a className="navbar_a" id="navbar_a3" href="/products">Products</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
