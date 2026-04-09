import { useLocation } from "react-router-dom";
import { FaSquareMinus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
function ProductDetail() {
  const { state } = useLocation();
//   console.log(state);
  return (
    <main className="bg-gray-100  p-1">
      <section className=" flex    bg-white m-auto mt-10  gap-5 p-8   w-275">
        <div className="w-72">
          <img className="w-full" src={state?.image} alt="" />
        </div>
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-3xl">{state?.name}</h1>
            <h1 className="text-xl">Rating : {state?.rating}</h1>
            <h1 className="text-2xl text-orange-500  ">
              Rs.{state?.caloriesPerServing}
            </h1>
          </div>
          <div className="Quantity  flex  items-center  gap-4 p-1">
            <p>Quantity</p>
            <button>
              <FaSquareMinus size={30} />
            </button>
            <p>1</p>
            <button>
              <FaSquarePlus size={30} />
            </button>
          </div>

          <div className="space-x-4">
            <button className="w-52 p-3 bg-[#2abbe8] text-white  border">
              Buy Now
            </button>
            <button className="w-52 p-3 bg-orange-500 text-white  border">
              Add To Cart
            </button>
          </div>
        </div>
      </section>
      <section className="border flex   mt-4  w-[1100px] m-auto  bg-white">
        Description
      </section>
    </main>
  );
}

export default ProductDetail;
