import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Home from "./Home/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
