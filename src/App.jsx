import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Contactmodal from "./pages/Contactmodal";
import ScrollToTop from "./components/ScrollToTop"; 
import Page5 from "./pages/Page5";

function App() {
  return (
    <>
      <ScrollToTop /> {/* ✅ Add this inside Router but outside Routes */}

      <div className="pt-24 px-4 md:px-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/about" element={<Page2 />} />
          <Route path="/services" element={<Page3 />} />
          <Route path="/portfolio" element={<Page4 />} />
          {/* <Route path="/contact" element={<Contactmodal />} /> */}
          <Route path="/pricing" element={<Page5 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
