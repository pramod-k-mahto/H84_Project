import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <main className="flex   border-b-[0.1px]  border-b-gray-200   justify-around  items-center   p-3  ">
      <div className="flex   justify-center items-center gap-3  ">
        <img src={logo} alt="logo" />
        <NavLink className="text-[#0C6967]  font-bold  " to="/">
          Momos
        </NavLink>
      </div>
      <nav className="space-x-4">
        <NavLink to="/about">About Us </NavLink>
        <NavLink to="/menu">Our Menu </NavLink>
        <NavLink to="/services">Our Service </NavLink>
        <NavLink to="/allergyAdvised">Allergy Advice </NavLink>
      </nav>
      <div className="space-x-3  flex   items-center">
        <NavLink
          className="bg-gray-400 p-1 rounded-full"
          to="https://www.facebook.com"
          target="_blank"
        >
          <FaFacebookF color="white" />
        </NavLink>
        <NavLink className="bg-gray-400 p-1 rounded-full" to="/Contact">
          <FaInstagram color="white" />
        </NavLink>
        <NavLink className="bg-gray-400 p-1 rounded-full" to="/      ">
          <FaTiktok color="white" />
        </NavLink>
        <NavLink
          to="/contact"
          className="bg-[#D95103]  text-white  h-[41px]  w-[120px]  rounded-4xl flex justify-center items-center    "
        >
          Contact
        </NavLink>
      </div>

      <div className="border p-1.5  relative rounded-full   group bg-black">
        <FaUser size={20} color="white" />
        <div
          className="hidden   group-hover:flex  top-8   z-50  border-2 p-2  -left-7 
         bg-gray-500 text-white font-bold shadow-2xl rounded-md   gap-y-2  absolute  flex-col "
        >
          <NavLink className="hover:underline" to="/profile">
            Profile
          </NavLink>
          <NavLink className="hover:underline" to="/login">
            Login
          </NavLink>
          <NavLink className="hover:underline" to="/register">
            Register
          </NavLink>
          <NavLink className="hover:underline" to="/orderHistory">
            OrderHistory
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
