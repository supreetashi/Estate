import React from "react";
import Carousel from "../components/Carousel";
import PropertyCard from "../components/PropertyCard";
import HeroSection from "../components/HeroSection";
import property1 from "../assets/images/property1.jpg";
import property2 from "../assets/images/property2.jpg";
import "../assets/styles/HeroSection.css";
import Companies from "../components/Companies";

const properties = [
  { image: property1, title: "House 1", description: "Beautiful house", price: "$500,000" },
  { image: property2, title: "House 2", description: "Modern apartment", price: "$350,000" },
];

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Companies/>
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
