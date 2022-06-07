import styled from "styled-components";
import type { FC } from "react";

import CartIcon from "../../../../public/icons/cart.svg";
import { useCartContext } from "../../../hooks";

const CartRoot = styled.button`
    display: block;
    width: 3.2rem;
    height: 3.2rem;
    background-color: inherit;
    border: none;
    cursor: pointer;
    position: relative;
    padding: 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        width: 5.4rem;
        height: 5.4rem;
    }
`;

const CartCounter = styled.span<{ isVisible: boolean }>`
    position: absolute;
    bottom: -0.4rem;
    right: -0.4rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.4rem;
    border-radius: 8px;
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        padding: 0.6rem;
    }
`;

const CartOverlay = styled.div<{ isOpen: boolean }>`
    @media screen and (max-width: calc(${({ theme }) =>
        theme.breakpoints.bg})) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 40;
        pointer-events: none;
        display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        position: absolute;
        background-color: ${({ theme }) => theme.colors.white}};
        padding: 6.4rem 2.4rem 2.4rem 2.4rem;
        width: 44.3rem;
        right: 0;
        border: 4px solid ${({ theme }) => theme.colors.muted};
    }
`;

const CloseButton = styled.button``;

const CartContent = styled.div``;

export const Cart: FC = () => {
    const { isCartOpen, toggleCart, products } = useCartContext();

    return (
        <CartRoot onClick={toggleCart}>
            <CartIcon />
            <CartCounter isVisible={products.length > 0}>
                {products.length}
            </CartCounter>
            <CartOverlay isOpen={isCartOpen} />
        </CartRoot>
    );
};
