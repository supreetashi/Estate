import React from "react";
import Carousel from "../components/Carousel";
import PropertyCard from "../components/PropertyCard";
import HeroSection from "../components/HeroSection";
import property1 from "../assets/images/property1.jpg";
import property2 from "../assets/images/property2.jpg";
import "../assets/styles/HeroSection.css";
import Companies from "../components/Companies";

const properties = [
  { image: property1, title: "Asati Garden City", description: "Beautiful house", price: "$500,000" },
  { image: property2, title: "Citralan Puri Serang", description: "Modern apartment", price: "$350,000" },
  { image: property1, title: "Aliva Priva Jardin", description: "Beautiful house", price: "$500,000" },
  { image: property2, title: "Baigan Villa", description: "Modern apartment", price: "$350,000" },
  { image: property1, title: "Byankyanke Villa", description: "Beautiful house", price: "$500,000" },
  { image: property1, title: "Kajoor Villa", description: "Beautiful house", price: "$500,000" },
  { image: property2, title: "Bukk Villa", description: "Modern apartment", price: "$350,000" },
  { image: property1, title: "A Tu Jaare", description: "Beautiful house", price: "$500,000" },

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
