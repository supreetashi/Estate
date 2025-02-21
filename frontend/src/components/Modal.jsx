import React from "react";
import "../assets/styles/Modal.css"; // Ensure this file exists for styling

const Modal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <img src={property.image} alt={property.title} className="modal-image" />
        
        <h2 className="modal-title">{property.title}</h2>
        <p className="modal-location"><strong>Location:</strong> {property.location}</p>
        <p className="modal-price"><strong>Price:</strong> ₹{property.price}</p>
        <p className="modal-description">{property.description}</p>
        <p className="modal-category"><strong>Category:</strong> {property.category}</p>

        <hr />

        <h3 className="modal-owner-title">Owner Details</h3>
        <p className="modal-owner"><strong>Name:</strong> {property.owner_name}</p>
        <p className="modal-contact"><strong>Contact:</strong> {property.owner_contact}</p>
      </div>
    </div>
  );
};

export default Modal;
