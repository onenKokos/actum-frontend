import styled from "styled-components";
import type { FC } from "react";

import CartIcon from "../../../public/icons/cart.svg";

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

const CartCounter = styled.div<{ display: boolean }>`
    position: absolute;
    bottom: -0.4rem;
    right: -0.4rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.4rem;
    border-radius: 8px;
    display: ${({ display }) => (display ? "block" : "none")};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        padding: 0.6rem;
    }
`;

export const Cart: FC = () => (
    <CartRoot>
        <CartIcon />
        <CartCounter display={true}>4</CartCounter>
    </CartRoot>
);
