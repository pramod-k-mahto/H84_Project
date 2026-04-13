import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { NavLink } from "react-router-dom";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
function CartPage() {
  const { state } = useContext(CartContext);
  console.log(state);
  return (
    <main>
      {state?.cartItems?.length > 0 ? (
        <section className="flex  justify-between">
          <div className="flex  flex-col gap-y-4  border p-3  w-full ">
            {state?.cartItems?.map((items) => {
              return (
                <div className="border-2 h-30 w-[70%] flex">
                  <div className="h-full    flex">
                    <div className="h-full">
                      <img className="h-full" src={items.image} alt="" />
                    </div>
                    <div>
                      <h1>{items.name}</h1>
                    </div>
                  </div>
                  <div>Rs.{items.caloriesPerServing}</div>
                  <div className="Quantity  flex  items-center  gap-4 p-1">
                    <button>
                      <FaSquareMinus size={30} />
                    </button>
                    <p>1</p>
                    <button>
                      <FaSquarePlus size={30} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-2   w-[30%]  p-4 ">
            <h1>Order Summary</h1>
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
