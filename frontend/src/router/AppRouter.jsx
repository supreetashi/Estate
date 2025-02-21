import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Residences from "../pages/Residences";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/residences" element={<Residences />} />
        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
