import { createContext, useContext } from "react";
import { initialProducts } from "../data/product";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const products = initialProducts;

  return (
    <CartContext.Provider value={{products}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
