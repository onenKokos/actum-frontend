import styled from "styled-components";
import type { FC } from "react";

import { Button } from "../Button";
import { H2 } from "../TypoGraphy";
import { Product, Currency } from "../../types";
import { useCartContext } from "../../hooks";

const Root = styled.article`
    margin-bottom: 4rem;
`;

const CardImageContainer = styled.div`
    width: 100%;
    aspect-ratio: 4 / 6;
    position: relative;
    overflow: hidden;
    margin-bottom: 1rem;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        &:hover {
            button {
                transform: translateY(0);
            }
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
    }
`;

const CardBody = styled.div``;

const BestSellerTag = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    line-height: 2.2rem;
    padding: 0.8rem 2.4rem;
`;

const CartButton = styled(Button)`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        padding-left: 2.4rem;
        padding-right: 2.4rem;

        transform: translateY(6.3rem);
    }
`;

const Category = styled.span`
    display: inline-block;
    margin-bottom: 1rem;
    font-weight: 700;
`;

const Name = styled(H2)`
    margin-bottom: 0;
`;

const Price = styled.span``;

type ProductCardProps = {
    product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({
    product: { category, bestseller, name, image, price, currency, ...rest },
}) => {
    const { addItem, setIsCartOpen } = useCartContext();

    const handleClick = () => {
        addItem({
            ...rest,
            category,
            bestseller,
            name,
            image,
            price,
            currency,
        });
        setIsCartOpen(true);
    };

    return (
        <Root>
            <CardImageContainer>
                <img alt={image.alt} src={image.src} loading="lazy" />
                {bestseller && <BestSellerTag>{"Best Seller"}</BestSellerTag>}
                <CartButton
                    text="Add to cart"
                    variant="dark"
                    onClick={handleClick}
                />
            </CardImageContainer>
            <CardBody>
                <Category>{category}</Category>
                <Name text={name} />
                <Price>
                    {`${currency === Currency.Usd ? "$" : "€"} ${price}`}
                </Price>
            </CardBody>
        </Root>
    );
};
