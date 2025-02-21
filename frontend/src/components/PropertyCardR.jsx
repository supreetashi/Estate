import React from "react";
import "../assets/styles/PropertyCard.css"; // Ensure styling

const PropertyCard = ({ property, onClick }) => {
  return (
    <div className="property-card" onClick={() => { console.log("Card Clicked!"); onClick(); }}>
      <img src={property.image} alt={property.title} className="property-image" />
      <h2 className="property-title">{property.title}</h2>
      <p className="property-location">{property.location}</p>
      <p className="property-price">₹{property.price}</p>
    </div>
  );
};

export default PropertyCard;
