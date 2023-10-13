import "./App.css";
import Footer from "./reusable/Footer";
import NavBar from "./reusable/Nav";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
