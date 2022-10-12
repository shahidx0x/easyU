import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./animation/driver.css";
import "./animation/keyfram.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Footer } from "./shared/Footer/Footer";
import { Navbar } from "./shared/Navbar/Navbar";
import { WP } from "./pages/MultiSignUps/WP";
import { Technetian } from "./pages/MultiSignUps/Technetian";
import { Customer } from "./pages/MultiSignUps/Customer";
import { EmergencyService } from "./pages/Emergency/EmergencyService";
import { WPServices } from "./pages/WP/WPServices";
import { Products } from "./pages/Products/Products";
import AuthProvider from "./context/AuthContext";


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/creating-new-user" element={<Signup />} />
          <Route path="/creating-new-customer" element={<Customer />} />
          <Route path="/creating-new-technetian" element={<Technetian />} />
          <Route path="/creating-new-wp" element={<WP />} />
          <Route path="/emergency-service" element={<EmergencyService />} />
          <Route path="/wp-service" element={<WPServices />} />
          <Route path="/buy-products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
