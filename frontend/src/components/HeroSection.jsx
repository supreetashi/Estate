import React from "react";
import "../assets/styles/HeroSection.css";
import hero from "../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <div class="hero-container">
      <div class="circle"></div>
        <div class="hero-left">
            <div class="hero-title">
                <div class="orange-circle"></div>
                 <p>Discover
                    <br />
                    Most Beautiful
                    <br />
                    Properties
                 </p>
            </div>
                
            <div class="hero-description">
              <span>Find a veriety of properties that suits you
                <br />
                Forgot about the hassle of looking for a property
              </span>
            </div>

            <div className="searchbar">
                <input type="text" placeholder="Search for properties" />
                <button>Search</button>
            </div>

            <div className="stats">
                <div className="stat">
                    <span class="no">
                      <span>9000</span>
                      <span class="plus">+</span>
                    </span>
                    <span className="secondaryText">Premium Product</span>
                </div>
                <div className="stat">
                    <span class="no">
                      <span>2000</span>
                      <span class="plus">+</span>
                    </span>
                    <span className="secondaryText">Happy Customer</span>
                </div>
                <div className="stat">
                    <span class="no">
                      <span>30</span>
                      <span class="plus">+</span>
                    </span>
                    <span className="secondaryText">Award Winning</span>
                </div>
            </div>
        </div>    
        <div class="hero-right">
                <div class="hero-image">
                    <img src={hero} alt="hero" />
                </div>
        </div>
    </div>
    
  );
}

export default HeroSection;