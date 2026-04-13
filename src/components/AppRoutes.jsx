import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Menu from "../pages/Menu";
import OrderHistory from "../pages/OrderHistory";
import Profile from "../pages/Profile";
import Services from "../pages/Services";
import AllergyAdvised from "../pages/AllergyAdvised";
import Login from "../pages/Login";
import Register from "../pages/Register";

import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/CartPage";
function AppRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cartPage" element={<CartPage />} />


        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/allergyAdvised" element={<AllergyAdvised />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default AppRoutes;
