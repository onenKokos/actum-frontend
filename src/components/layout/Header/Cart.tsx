import styled from "styled-components";
import type { FC } from "react";

import CartIcon from "../../../../public/icons/cart.svg";
import CloseIcon from "../../../../public/icons/close.svg";
import { useCartContext } from "../../../hooks";
import { Button } from "../../Button";
import { Product } from "../../../types";

const CartRoot = styled.div`
    position: relative;
`;

const CartButton = styled(CartIcon)`
    display: block;
    width: 3.2rem;
    height: 3.2rem;
    background-color: inherit;
    border: none;
    cursor: pointer;
    padding: 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        width: 5.4rem;
        height: 5.4rem;
    }
`;

const CloseButton = styled(CloseIcon)`
    display: inline-block;
    margin-left: auto;
    margin-right: 0;
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    margin-bottom: 2.4rem;
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
    pointer-events: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        padding: 0.6rem;
    }
`;

const CartContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${({ theme }) => theme.colors.white}};
    padding: 2.4rem;
    left: 0;
    right: 0;
    border: 4px solid ${({ theme }) => theme.colors.muted};
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    z-index: 20;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        position: absolute;
        left: unset;
        width: 44.5rem;
    }
`;

const CartItem = styled.div`
    display: flex;
    padding-bottom: 2.4rem;
    align-items: center;
    gap: 0.8rem;

    & > div {
        width: 50%;
        height: 16.8rem;
    }

    &:last-of-type {
        margin-bottom: 2.4rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.font};
    }
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductImage = styled.div`
    display: block;
    width: 50%;
    height: 9.2rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const ProductPrice = styled.div`
    font-size: 2.9rem;
    weight: 400;
    color: ${({ theme }) => theme.colors.font};
    line-height: 3.2rem;
`;

const ProductName = styled.span`
    font-size: 2rem;
    line-height: 2.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 2rem;
`;

export const Cart: FC = () => {
    const { isCartOpen, toggleCart, products, clearCart } = useCartContext();

    return (
        <CartRoot>
            <CartButton onClick={toggleCart} />
            <CartCounter isVisible={products.length > 0}>
                {products.length}
            </CartCounter>
            <CartContainer isOpen={isCartOpen}>
                <CloseButton onClick={toggleCart} />
                {products.map(
                    ({
                        name,
                        price,
                        currency,
                        image: { alt, src },
                    }: Product) => (
                        <CartItem key={`k__${name}`}>
                            <ProductInfo>
                                <ProductName>{name}</ProductName>
                                <ProductPrice>{`${
                                    currency === "USD" ? "$" : "€"
                                } ${price}`}</ProductPrice>
                            </ProductInfo>
                            <ProductImage>
                                <img src={src} alt={alt} />
                            </ProductImage>
                        </CartItem>
                    )
                )}
                <Button variant="light" onClick={clearCart} text="Clear" />
            </CartContainer>
        </CartRoot>
    );
};
