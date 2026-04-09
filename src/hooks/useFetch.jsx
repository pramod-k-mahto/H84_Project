import { useEffect, useState } from "react";
function useFetch() {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      let res = await fetch("https://dummyjson.com/recipes");
      res = await res.json();
      //   console.log(res);
      setProducts(res.recipes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return { products };
}
export default useFetch;
