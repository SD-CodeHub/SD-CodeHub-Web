import { Routes, Route, Navigate } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RouteMeta from "./components/RouteMeta";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      <ScrollToTop />
      <RouteMeta />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/about" element={<Page2 />} />
          <Route path="/services" element={<Page3 />} />
          <Route path="/portfolio" element={<Page4 />} />
          <Route path="/pricing" element={<Page5 />} />
          <Route path="/careers" element={<Page6 />} />
          {/* Legacy URL kept alive so existing links and search results resolve */}
          <Route path="/carrer" element={<Navigate to="/careers" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <ChatBot />
    </>
  );
}

export default App;
