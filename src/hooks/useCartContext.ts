import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";

export const useCartContext = () => useContext(CartContext);
