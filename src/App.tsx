
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Contact from "./pages/contact";
import Product from "./pages/product";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="product" element={<Product />} />
      </Routes>
    </>
  );
}