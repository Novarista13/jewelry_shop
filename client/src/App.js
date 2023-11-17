import "./App.css";
import Footer from "./reusable/Footer";
import NavBar from "./reusable/Nav";
import Home from "./components/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Shop from "./components/shop/Shop";
import Current from "./reusable/Current";
import Login from "./components/user/Login";
import User from "./components/user/User";
import Register from "./components/user/Register";
import { useContext } from "react";
import { UserIdContext } from "./contexts/UserContext";
import Animation from "./reusable/Animation";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  const { userId } = useContext(UserIdContext);
  return (
    <div className="App">
      <ProductContextProvider>
        <NavBar />
        <NotificationContainer />
        <Current />
        <Animation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/user"
            element={userId ? <User /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </ProductContextProvider>
    </div>
  );
}

export default App;
