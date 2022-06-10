import { useEffect, useState } from "react";

import type { Product } from "../types";
import { Order, Attributes } from "../context";
import { useFilterContext } from "./useFilterContext";
import { useSortContext } from "./useSortContext";

const sortProducts = (
    a: Product,
    b: Product,
    attr: Attributes,
    order: Order
) => {
    if (order === Order.DESCENDING) {
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
};

export const useProducts = (products: Product[]) => {
    const [activeProducts, setActiveProducts] = useState<Product[]>(products);

    const { priceRange, activeFilters } = useFilterContext();
    const { order, attr } = useSortContext();

    useEffect(() => {
        let filteredProducts = [];

        switch (priceRange) {
            case 0:
                filteredProducts = products
                    .filter(({ price }) => {
                        return price < 20;
                    })
                    .sort((a, b) => sortProducts(a, b, attr, order));
                setActiveProducts(filteredProducts);
                break;

            case 1:
                filteredProducts = products
                    .filter(({ price }) => {
                        return price >= 20 && price < 100;
                    })
                    .sort((a, b) => sortProducts(a, b, attr, order));
                setActiveProducts(filteredProducts);
                break;

            case 2:
                filteredProducts = products
                    .filter(({ price }) => price >= 100 && price < 200)
                    .sort((a, b) => sortProducts(a, b, attr, order));
                setActiveProducts(filteredProducts);
                break;

            case 3:
                filteredProducts = products
                    .filter(({ price }) => price >= 200)
                    .sort((a, b) => sortProducts(a, b, attr, order));
                // console.log(filteredProducts);
                setActiveProducts(filteredProducts);
                break;

            default:
                setActiveProducts(products);
        }
    }, [priceRange, attr, order, activeFilters]);

    return {
        activeProducts,
    };
};
