import "./App.css";
import Footer from "./reusable/Footer";
import NavBar from "./reusable/Nav";
import Home from "./components/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Current from "./reusable/Current";
import Login from "./components/admin/Login";
import Admin from "./components/admin/Admin";
import Register from "./components/admin/Register";
import { useContext } from "react";
import { UserIdContext } from "./contexts/UserContext";

function App() {
  const { userId } = useContext(UserIdContext);
  return (
    <div className="App">
      <NavBar />
      <Current />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={userId ? <Admin /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
