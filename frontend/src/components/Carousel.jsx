import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div style={styles.carousel}>
      <button onClick={prevSlide} style={styles.button}>❮</button>
      <div style={styles.slide}>
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          style={styles.image}
        />
        <h3>{items[currentIndex].title}</h3>
      </div>
      <button onClick={nextSlide} style={styles.button}>❯</button>
    </div>
  );
};

const styles = {
  carousel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  slide: {
    textAlign: "center",
  },
  image: {
    width: "300px",
    height: "150px",
    objectFit: "cover",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Carousel;
