import { NavLink } from "react-router-dom";
import circle from "../../assets/circle.png";
import momo from "../../assets/momo.png";
import oneBg from "../../assets/oneBg.png";

import { MdOutlineArrowRightAlt } from "react-icons/md";

function Hero() {
  return (
    <section className="flex    justify-end ">
      <div className=" h-64   mt-20 mr-20  ">
        <p>RESTAURANT</p>
        <h1 className="text-[61px]  flex items-center  font-bold  ">
          The{" "}
          <span
            className="flex   bg-position-[2px]   bg-size-[180px] 
             border h-20  w-48 justify-center items-center text-white   
             bg-no-repeat"
            style={{ backgroundImage: `url(${oneBg})` }}
          >
            {" "}
            #One{" "}
          </span>{" "}
        </h1>
        <h1 className="text-[61px] font-bold  ">
          Momo <span className="text-[#D95103]">Restaurant</span>{" "}
        </h1>
        <p className="font-bold  text-[20px]">
          More than <span className="text-[#D95103]"> 20+ Varieties </span> of
          momo available for you{" "}
        </p>
        <NavLink
          to="/menu"

          
          className="bg-[#0C6967]  flex  justify-center  gap-2  mt-10 items-center
          w-[260px]  py-[20px]  px-[40px]  p-3 rounded-full text-white"
        >
          Explore Food Menu
          <MdOutlineArrowRightAlt size={25} />
        </NavLink>
      </div>
      <div className="   overflow-hidden  flex justify-end   w-[40%] relative  h-132.5  ">
        <img
          className=" z-20 w-82.5  absolute  top-25 right-14   "
          src={momo}
          alt=""
        />
        <img className="   absolute h-full -top-10   " src={circle} alt="" />
      </div>
    </section>
  );
}

export default Hero;
