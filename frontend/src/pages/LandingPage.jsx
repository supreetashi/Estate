import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import Value from "../components/Value";
import HeroSection from "../components/HeroSection";
import Companies from "../components/Companies";
import Contact from "../components/Contact";
import GetStarted from "../components/GetStarted";

const LandingPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      console.log("📢 Fetching properties from API..."); // Log API request start
      try {
        const response = await axios.get("http://localhost:3000/api/properties");

        console.log("✅ API Response Received:", response); // Log full response object
        console.log("📦 Properties Count:", response.data?.properties?.length); // Log number of properties
        
        if (response.data && response.data.properties) {
          setProperties(response.data.properties);
          console.log("🔄 State Updated: properties set successfully!");
        } else {
          console.warn("⚠️ Unexpected API response structure:", response.data);
        }
      } catch (error) {
        console.error("❌ Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  // Debugging render phase
  console.log("🔄 Rendering component, properties:", properties);

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
