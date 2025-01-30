import React, { useState } from "react";
import "../assets/styles/Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    
    <div class="carousel" >
      <div class="text">
        <span>Best Choices</span>
        <span>Popular Residencies</span>
      </div>
      <div className="slide-container">
      <button onClick={prevSlide} class="button">❮</button>
      <div class="slide">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          class="image"
        />
        <h3>{items[currentIndex].title}</h3>
      </div>
      <button onClick={nextSlide} class="button">❯</button>
      </div>
      
    </div>
  );
};


export default Carousel;
