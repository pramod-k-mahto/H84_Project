import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function Menu() {
  const { products } = useFetch();
  const navigate = useNavigate();
  return (
    <main>
      <section>
        {products.length > 0 ? (
          <div className="flex gap-5   flex-wrap justify-center   p-10 pt-15 ">
            {products?.map((item) => {
              return (
                <div
                  onClick={() => {
                    navigate("/productDetail",{state:item});
                  }}
                  key={item.id}
                  className="shadow-2xl w-52  rounded-2xl"
                >
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
          <div>
            <h1>Product Not Found</h1>
          </div>
        )}
      </section>
    </main>
  );
}

export default Menu;
