import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  return (
    <main className="bg-gray-200 ">
      {state?.cartItems?.length > 0 ? (
        <section className=" flex   justify-center gap-x-20 pt-10 pb-10   ">
          <div className="  w-[55%]  p-5   space-y-3.5  ">
            {state?.cartItems?.map((items) => {
              return (
                <div
                  key={items.id}
                  className=" font-serif shadow-2xl rounded-xl  bg-white flex  items-center justify-between pr-4 "
                >
                  <div className=" flex   gap-4   ">
                    <div className="">
                      <img
                        className="w-24  rounded-l-xl"
                        src={items.image}
                        alt=""
                      />
                    </div>
                    <div className="pt-2    w-72  ">
                      <h1>{items.name}</h1>
                    </div>
                  </div>
                  <div>
                    <p>Rs.{items.caloriesPerServing}</p>
                    <button
                      onClick={() => {
                        dispatch({ type: "delete", payload: items.id });
                      }}
                    >
                      <MdDelete size={25} />
                    </button>
                  </div>
                  <div className="Quantity  flex  items-center  gap-4 p-1">
                    <button
                      onClick={() => {
                        dispatch({ type: "decrement", payload: items.id });
                      }}
                    >
                      <FaSquareMinus size={30} />
                    </button>
                    <p>{items.quantity}</p>
                    <button
                      onClick={() => {
                        dispatch({ type: "increment", payload: items.id });
                      }}
                    >
                      <FaSquarePlus size={30} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" w-[30%]  p-3  h-80 space-y-4 shadow-2xl shadow-gray-500 Order ">
            <h1 className="text-2xl">Order Summary</h1>
            <div className=" flex  justify-between">
              <p>Subtotal (0 items)</p>
              <p>Rs. 0</p>
            </div>
            <div className="flex  justify-between">
              <p>Shipping Fee</p>
              <p>Rs. 0</p>
            </div>
            <div className=" space-x-2  p-2">
              <input
                className="outline-none border p-2"
                type="text"
                placeholder="Enter Voucher Code"
              />
              <button className="bg-blue-800  rounded-md w-24 p-2 text-white">
                APPLY
              </button>
            </div>
            <div className="flex  font-bold justify-between">
              <p>Total</p>
              <p>Rs. 0</p>
            </div>
            <div className="">
              <button className="bg-orange-500 text-white p-3 w-full">
                Procced To Checkout(0)
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="m-auto w-96  p-5 mt-15  font-serif font-bold text-center space-y-7">
          <h1>There is No Cart Items To Show</h1>
          <NavLink className="bg-orange-400  p-4" to="/menu">
            Continue Shopping
          </NavLink>
        </section>
      )}
    </main>
  );
}
export default CartPage;
