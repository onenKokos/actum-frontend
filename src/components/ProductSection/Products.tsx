import styled from "styled-components";
import type { FC } from "react";

import { ProductCard } from "./ProductCard";
import { Product } from "../../types";
import { useActiveProductsContext } from "../../hooks";

const Root = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5rem;
    }
`;

type ProductsProps = {
    products: Product[];
    numberOfProducts: number;
    paginatorOffset: number;
};

export const Products: FC<ProductsProps> = ({
    paginatorOffset,
    numberOfProducts,
}) => {
    const { products } = useActiveProductsContext();

    const startIndex = paginatorOffset * numberOfProducts;
    const endIndex = (paginatorOffset + 1) * numberOfProducts;
    const productsToShow = products.slice(startIndex, endIndex);

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
