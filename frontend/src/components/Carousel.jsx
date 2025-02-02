import React, { useState } from "react";
import "../assets/styles/Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= items.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <span>
        <div className="orange-text">Best Choices</div>
        <div className="normal-text">
          Popular Residencies
          <div className="slide-button">
            <button onClick={prevSlide} className="prev-button">
              ❮
            </button>
            <button onClick={nextSlide} className="next-button">
              ❯
            </button>
          </div>
        </div>
      </span>
      <div className="slide-wrapper">
        <div
          className="slide-container"
          style={{ transform: `translateX(-${currentIndex * (100 / 4)}vw)` }}
        >
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="slide" key={index}>
                <img src={item.image} alt={item.title} className="image" />
                <span className="price">{item.price}</span>
                <span className="primaryText">{item.title}</span>
                <span className="secondText">{item.description}</span>
              </div>
            ))
          ) : (
            <p>Loading properties...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
