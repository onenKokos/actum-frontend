import { useState, useMemo, useCallback } from "react";
import type { FC, ReactNode } from "react";

import { SortContext, Order, Attributes } from "./SortContext";

type SortContextProviderProps = {
    children: ReactNode;
};

export const SortContextProvider: FC<SortContextProviderProps> = ({
    children,
}) => {
    const [order, setOrder] = useState<Order>(Order.ASCENDING);
    const [attribute, setAttribute] = useState<Attributes>("price");

    const values = useMemo(() => {
        return {
            order,
            attr: attribute,
        };
    }, [order, attribute]);

    const toggleOrder = useCallback(() => {
        setOrder(
            order === Order.ASCENDING ? Order.DESCENDING : Order.ASCENDING
        );
    }, [order]);

    const setAttr = useCallback(
        (payload: Attributes) => {
            setAttribute(payload);
        },
        [attribute]
    );

    return (
        <SortContext.Provider value={{ ...values, setAttr, toggleOrder }}>
            {children}
        </SortContext.Provider>
    );
};
