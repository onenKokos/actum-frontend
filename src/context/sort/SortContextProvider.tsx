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
    const [isActive, setActive] = useState<boolean>(false);

    const values = useMemo(() => {
        return {
            order,
            attr: attribute,
            isActive,
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

    const setIsActive = useCallback(() => {
        setActive(true);
    }, []);

    return (
        <SortContext.Provider
            value={{ ...values, setAttr, toggleOrder, setIsActive }}
        >
            {children}
        </SortContext.Provider>
    );
};
