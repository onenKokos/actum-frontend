import { createContext } from "react";

export enum Order {
    ASCENDING = "ascending",
    DESCENDING = "descending",
}

export type Attributes = "price" | "alphabetically";

type SortContextState = {
    order: Order;
    attr: Attributes;
    toggleOrder: () => void;
    setAttr: (payload: Attributes) => void;
};

const sortContextDefaultState: SortContextState = {
    order: Order.ASCENDING,
    attr: "price",
    /* eslint-disable @typescript-eslint/no-empty-function */
    setAttr: () => {},
    toggleOrder: () => {},
    /* eslint-enable */
};

export const SortContext = createContext<SortContextState>(
    sortContextDefaultState
);
