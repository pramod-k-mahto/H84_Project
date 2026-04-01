import circle from "../../assets/circle.png";
import momo from "../../assets/momo.png";

function Hero() {
  return (
    <section className="flex    justify-end ">
      <div className=" h-64 mt-15   space-y-5 mr-56 p-4 ">
        <p>RESTAURANT</p>
        <h1 className="text-3xl font-bold  ">The #One </h1>
        <h1 className="text-3xl font-bold  ">Momo Restaurant</h1>
        <p
          className="font-bold
"
        >
          More than 20+ Varieties of momo available for you{" "}
        </p>

        <button className="bg-[#0C6967]   p-3 rounded-full text-white">
          {" "}
          Explore Food Menu
        </button>
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
