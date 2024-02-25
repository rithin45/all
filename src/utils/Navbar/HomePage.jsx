import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./homepage.css"
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      
      <div style={{ margin: "3rem" }} className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
           <h1 className="primary-heading">
              Fresh Grocery Items Delivered to Your Doorstep
            </h1>
            <p className="primary-text">
              Our dedicated team ensures that your grocery items, including vegetables, dairy products, and bakery items, are carefully selected and delivered fresh to your home.
            </p>
            <button
              className="secondary-button"
              onClick={() => navigate("/Addp")}
            >
              Order Now <FiArrowRight />
              {/* <Link to="/products" /> */}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
        <Work/>
        <Testimonial/>
        <Contact/>
      </div>
    </>
  );
};

export default HomePage;