import { createContext } from "react";
import type { Product } from "../../types";

type CartContextState = {
    products: Product[];
    isCartOpen: boolean;
    setIsCartOpen: (payload: boolean) => void;
    clearCart: () => void;
    addItem: (product: Product) => void;
};

const defaultCartContextState: CartContextState = {
    products: [],
    isCartOpen: false,
    /* eslint-disable @typescript-eslint/no-empty-function */
    setIsCartOpen: () => {},
    clearCart: () => {},
    addItem: () => {},
    /* eslint-enable */
};

export const CartContext = createContext<CartContextState>(
    defaultCartContextState
);
