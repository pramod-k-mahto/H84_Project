import { createContext, useEffect, useReducer } from "react";
export const CartContext = createContext();
const getProduct = () => {
  let res = localStorage.getItem("cartItems");
  return res ? JSON.parse(res) : [];
};
const initialValue = {
  cartItems: getProduct(),
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      //   console.log(action);
      // todos:
      // 1.collect the data or product
      // 2.Check the product is exist or not
      // 3.if product exist then do not do anythings
      // 4.if product not exist , then add the product into todo , also  add   quantity
      // 5.Return the new or update product or cartItems
      const isExist = state.cartItems.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExist) {
        return state;
      } else {
        let newProduct = { ...action.payload, quantity: 1 };
        let newCartItem = [...state.cartItems, newProduct];
        return {
          cartItems: newCartItem,
        };
      }
    }
    
    case "increment": {
      return state;
    }
    case "decrement": {
      return state;
    }
    case "delete": {
      return state;
    }
    case "clearCart": {
      return state;
    }
    case "default": {
      return state;
    }
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialValue);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
