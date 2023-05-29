import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./Components/Navigasi";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Portofolio from "./Pages/Portofolio";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Portofolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
