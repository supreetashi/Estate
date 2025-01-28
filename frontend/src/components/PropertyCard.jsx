import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div style={styles.card}>
      <img src={property.image} alt={property.title} style={styles.image} />
      <div style={styles.content}>
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <p><strong>Price:</strong> {property.price}</p>
        <button style={styles.button}>View Details</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "300px",
    margin: "10px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  content: {
    padding: "10px",
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

export default PropertyCard;
