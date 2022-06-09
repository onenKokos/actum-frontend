import { useState, useMemo, useCallback, useEffect } from "react";
import type { FC, ReactNode } from "react";
import type { Product } from "../../types";

import { CartContext } from "./CartContext";
import { LOCAL_STORAGE_KEY } from "../../contants";

type CartContextProps = {
    children: ReactNode;
};

export const CartContextProvider: FC<CartContextProps> = ({ children }) => {
    const [items, setItems] = useState<Product[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(
        () => {
            const localProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
            const parsedProducts = localProducts
                ? (JSON.parse(localProducts) as Product[])
                : [];
            setItems(parsedProducts);
        },
        [] /* can this be empty? literally only want it on mount */
    );

    const addItem = useCallback(
        (payload: Product) => {
            if (products.some(({ name }: Product) => name === payload.name)) {
                return;
            }

            const newItems = [...items, payload];
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems));
            setItems(newItems);
            setIsOpen(true);
        },
        [items]
    );

    const clearCart = useCallback(() => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        setItems([]);
        setIsOpen(false);
    }, [items]);

    const setIsCartOpen = useCallback(
        (payload: boolean) => {
            setIsOpen(payload);
        },
        [isOpen]
    );

    const products = useMemo(() => {
        return items;
    }, [items]);

    const isCartOpen = useMemo(() => {
        return isOpen;
    }, [isOpen]);

    return (
        <CartContext.Provider
            value={{ products, isCartOpen, setIsCartOpen, clearCart, addItem }}
        >
            {children}
        </CartContext.Provider>
    );
};
