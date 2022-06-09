import { createContext } from "react";
import type { Product } from "../../types";

type ActiveProductsContextState = {
    products: Product[];
};

const defaultActiveProductsContextState: ActiveProductsContextState = {
    products: [],
};

export const ActiveProductsContext = createContext<ActiveProductsContextState>(
    defaultActiveProductsContextState
);
