import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCardR";
import Modal from "../components/Modal";
import "../assets/styles/Residences.css";

const Residences = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("📢 Fetching properties from API...");
    axios
      .get("http://localhost:3000/api/properties")
      .then((response) => {
        console.log("✅ Properties fetched:", response.data);
        setProperties(response.data.properties);
      })
      .catch((error) => {
        console.error("❌ Error fetching properties:", error);
      });
  }, []);

  const openModal = (property) => {
    console.log("Opening modal for:", property);
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="residences-container">
      <h1 className="residences-title">Available Residences</h1>
      <div className="residences-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} onClick={() => openModal(property)} />
        ))}
      </div>

      {isModalOpen && selectedProperty && <Modal property={selectedProperty} onClose={closeModal} />}
    </div>
  );
};

export default Residences;
