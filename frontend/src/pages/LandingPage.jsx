import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Value from "../components/Value";
import HeroSection from "../components/HeroSection";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import GetStarted from "../components/GetStarted";
import axios from "axios";

const LandingPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/properties"); // Update with your backend API URL
        setProperties(response.data); // Assuming the response is an array of property objects
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <HeroSection />
      <Companies />
      <Carousel items={properties} />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
};

export default LandingPage;
