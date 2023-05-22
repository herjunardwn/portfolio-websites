import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./Components/Navigasi";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Portofolio from "./Pages/Portofolio";

const App = () => {
  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Portofolio />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
