import styled from "styled-components";
import type { FC } from "react";

import { ProductCard } from "./ProductCard";
import { Product } from "../../types";

const Root = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5rem;
    }
`;

const Message = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 2.6rem;
    font-weight: 700;
    width: 100%;
    height: 100%;
`;

type ProductsProps = {
    products: Product[];
    numberOfProducts: number;
    paginatorOffset: number;
};

export const Products: FC<ProductsProps> = ({
    paginatorOffset,
    numberOfProducts,
    products,
}) => {
    const startIndex = paginatorOffset * numberOfProducts;
    const endIndex = (paginatorOffset + 1) * numberOfProducts;
    const productsToShow = products.slice(startIndex, endIndex);

    if (products.length === 0) {
        return <Message>No products found.</Message>;
    }

    return (
        <Root>
            {productsToShow.map((product: Product) => (
                <ProductCard
                    product={product}
                    key={`k__${product.name}--${product.price}`}
                />
            ))}
        </Root>
    );
};
