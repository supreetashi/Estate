import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
