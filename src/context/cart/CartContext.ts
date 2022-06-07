import { createContext } from "react";
import { Product } from "../../types";

type CartContextState = {
    products: Product[];
    isCartOpen: boolean;
    toggleCart: () => void;
    clearCart: () => void;
    addItem: (...args) => void;
};

const defaultCartContextState: CartContextState = {
    products: [],
    isCartOpen: false,
    toggleCart: () => {},
    clearCart: () => {},
    addItem: () => {},
};

export const CartContext = createContext<CartContextState>(
    defaultCartContextState
);
