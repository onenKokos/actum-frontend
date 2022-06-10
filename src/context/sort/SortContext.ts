import { createContext } from "react";

export enum Order {
    ASCENDING = "ascending",
    DESCENDING = "descending",
}

export type Attributes = "price" | "name";

type SortContextState = {
    order: Order;
    attr: Attributes;
    isActive: boolean;
    setIsActive: () => void;
    toggleOrder: () => void;
    setAttr: (payload: Attributes) => void;
};

const sortContextDefaultState: SortContextState = {
    order: Order.ASCENDING,
    attr: "price",
    isActive: false,
    /* eslint-disable @typescript-eslint/no-empty-function */
    setIsActive: () => {},
    setAttr: () => {},
    toggleOrder: () => {},
    /* eslint-enable */
};

export const SortContext = createContext<SortContextState>(
    sortContextDefaultState
);
