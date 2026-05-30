import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Celebration from "./pages/Celebration";
import WallOfLove from "./pages/WallOfLove";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import useSmoothScroll from "./hooks/useSmoothScroll";
import "./index.css";

function App() {
  useSmoothScroll();

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celebration" element={<Celebration />} />
        <Route path="/wall-of-love" element={<WallOfLove />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
