import { useState, useMemo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import { ActiveProductsContext } from "./ActiveProductsContext";
import { useSortContext } from "../../hooks";
import { Order } from "../sort";
import type { Product } from "../../types";

type ActiveProductsContextProviderProps = {
    children: ReactNode;
    products: Product[];
};

export const ActiveProductsContextProvider: FC<
    ActiveProductsContextProviderProps
> = ({ children, products: incomingProducts }) => {
    const [activeProducts, setActiveProducts] =
        useState<Product[]>(incomingProducts);

    const { attr, order } = useSortContext();

    useEffect(() => {
        // console.log(`Sort by ${attr} in ${order} order.`);

        const sortedArray = activeProducts.sort((a, b) => {
            if (order === Order.ASCENDING) {
                if (a[attr] < b[attr]) {
                    return -1;
                }

                if (a[attr] > b[attr]) {
                    return 1;
                }

                return 0;
            } else {
                if (a[attr] < b[attr]) {
                    return 1;
                }

                if (a[attr] > b[attr]) {
                    return -1;
                }

                return 0;
            }
        });
        setActiveProducts(sortedArray);
    }, [attr, order]);

    const products = useMemo(() => {
        return activeProducts;
    }, activeProducts);

    return (
        <ActiveProductsContext.Provider value={{ products }}>
            {children}
        </ActiveProductsContext.Provider>
    );
};
