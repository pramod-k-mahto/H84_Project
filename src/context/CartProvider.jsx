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
      const isExist = state.cartItems.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExist) {
        alert(" Product already in Cart !");
        return state;
      } else {
        let newProduct = { ...action.payload, quantity: 1 };
        let newCartItem = [...state.cartItems, newProduct];
        alert("New  Product  is added to  Cart !");
        return {
          cartItems: newCartItem,
        };
      }
    }
    case "increment": {
      // todo
      // [{id:1,qty}]
      // first get Id of that product
      // find that product exist or not
      // if found then increment qty.
      // if not found do not do anythings
      // console.log(action);
      let newCartItem = state.cartItems.map((item) => {
        return item.id == action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      return {
        cartItems: newCartItem,
      };
    }
    case "decrement": {
      let newCartItem = state.cartItems.map((item) => {
        return item.id == action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
      return {
        cartItems: newCartItem,
      };
    }
    case "delete": {
      // collect the Id of that product
      // filter out that product
      // and return new CartItem
      let newCartItem = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
      alert("Product is Removed from The cart !");
      return {
        cartItems: newCartItem,
      };
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
