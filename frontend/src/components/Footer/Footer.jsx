import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eligendi illum esse minima debitis explicabo tenetur asperiores quis sed dignissimos aspernatur non aperiam doloribus eaque, tempora quasi dolorem maxime neque.
          </span>
        </div>
        <div className="item">
        <h1>Contact Us</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eligendi illum esse minima debitis explicabo tenetur asperiores quis sed dignissimos aspernatur non aperiam doloribus eaque, tempora quasi dolorem maxime neque.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Aishstore</span>
          <span className="copyright">
            Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
