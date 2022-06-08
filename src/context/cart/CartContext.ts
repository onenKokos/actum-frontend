import { createContext } from "react";
import { Product } from "../../types";

type CartContextState = {
    products: Product[];
    isCartOpen: boolean;
    toggleCart: () => void;
    clearCart: () => void;
    addItem: (product: Product) => void;
};

const defaultCartContextState: CartContextState = {
    products: [],
    isCartOpen: false,
    /* eslint-disable @typescript-eslint/no-empty-function */
    toggleCart: () => {},
    clearCart: () => {},
    addItem: () => {},
    /* eslint-enable */
};

export const CartContext = createContext<CartContextState>(
    defaultCartContextState
);
