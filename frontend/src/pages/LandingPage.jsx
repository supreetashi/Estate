import React from "react";
import Carousel from "../components/Carousel";
import PropertyCard from "../components/PropertyCard";

const properties = [
  { image: "/assets/images/property1.jpg", title: "House 1", description: "Beautiful house", price: "$500,000" },
  { image: "/assets/images/property2.jpg", title: "House 2", description: "Modern apartment", price: "$350,000" },
];

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to RealEstatePro</h1>
      <Carousel items={properties} />
      <div>
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
