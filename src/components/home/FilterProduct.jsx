import { MdOutlineArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

function FilterProduct() {
  let [filterItem, setFilterItem] = useState([]);
  // fetch data from the custom hooks
  const { products } = useFetch();
  // console.log(products)

  // to filter the item
  const filterItems = (cuisine = "Asian") => {
    let filter = products?.filter((item) => {
      return item.cuisine == cuisine;
    });
    setFilterItem(filter);
  };

  useEffect(() => {
    filterItems();
  }, [products]);

  return (
    <section className="  flex flex-col  justify-center items-center my-3 py-8 gap-y-4">
      <div className="flex flex-col   gap-y-2 justify-center items-center">
        <h1 className="text-[40px]  font-bold  ">
          Our <span className="text-[#D95103]"> Most Popular</span> Recipes
        </h1>
        <p>
          Browse through a varieties of recipes with fresh ingredients selected
          only from the best places
        </p>
      </div>
      <div className="space-x-3">
        <button
          onClick={() => {
            filterItems("Asian");
          }}
          className="border  hover:bg-gray-500  cursor-pointer    p-2 rounded-3xl  w-20"
        >
          Asian
        </button>
        <button
          onClick={() => {
            filterItems("Pakistani");
          }}
          className="border   hover:bg-gray-500  cursor-pointer   p-2 rounded-3xl  w-20"
        >
          Pakistani
        </button>
        <button
          onClick={() => {
            filterItems("Italian");
          }}
          className="border  hover:bg-gray-500  cursor-pointer    p-2 rounded-3xl  w-20"
        >
          Italian
        </button>
      </div>
      <div className="">
        {filterItem?.length > 0 ? (
          <div className="flex gap-3   flex-wrap justify-center    p-10 ">
            {filterItem?.map((item) => {
              return (
                <div key={item.id} className="shadow-2xl w-52  rounded-2xl">
                  <div className="">
                    <img
                      className="  rounded-xl w-full"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className=" h-20  pl-2 pt-1 font-serif ">
                    <h1 className="font-bold">{item?.name}</h1>
                    <h1 className="font-bold  text-orange-800  ">
                      Rs.{item?.caloriesPerServing}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Product Not Found</div>
        )}
      </div>
      <div>
        <NavLink
          to="/menu"
          className="bg-[#0C6967]  flex  justify-center  gap-2  mt-10 items-center
          w-65  py-5  px-10  p-3 rounded-full text-white"
        >
          Explore Food Menu
          <MdOutlineArrowRightAlt size={25} />
        </NavLink>
      </div>
    </section>
  );
}

export default FilterProduct;
