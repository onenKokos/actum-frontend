import styled from "styled-components";
import { useState } from "react";
import type { FC } from "react";

import { ProductsHeading } from "./ProductsHeading";
import { MobileFilterToggle } from "./MobileFilterToggle";
import { Sort } from "./Sort";
import { DesktopFilters } from "./DesktopFilters";
import { Products } from "./Products";
import { MobileFilters } from "./MobileFilters";
import { Paginator } from "./Paginator";
import { useFilterContext, useIsMobile, useProducts } from "../../hooks";

import type { Product } from "../../types";

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContentWrapper = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        display: grid;
        grid-template-columns: 41.8rem auto;
        grid-gap: 5rem;
    }
`;

type ProductSectionProps = {
    products: Product[];
};

export const ProductSection: FC<ProductSectionProps> = ({ products }) => {
    const { isMobile } = useIsMobile();
    const { activeProducts } = useProducts(products);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const numberOfProducts = isMobile ? 4 : 6;
    const { activeFilters, filtersOff } = useFilterContext();

    let filteredProducts = [];
    if (filtersOff) {
        filteredProducts = activeProducts;
    } else {
        activeProducts.forEach((product: Product) => {
            let match = false;

            Object.keys(activeFilters).forEach((k) => {
                if (product.category === k && activeFilters[k] === true) {
                    match = true;
                }
            });

            if (match) {
                filteredProducts.push(product);
            }
        });
    }

    const clickHandler = (input: number) => {
        if (input > -1 && input < products.length / numberOfProducts) {
            setActiveIndex(input);
        }
    };

    return (
        <section>
            <TopContainer>
                <ProductsHeading
                    heading="Materials"
                    subheading="Premium Photos"
                />
                <Sort />
                <MobileFilterToggle />
            </TopContainer>

            <ContentWrapper>
                <DesktopFilters
                    headingOne="Materials"
                    headingTwo="Price range"
                />
                <Products
                    products={filteredProducts}
                    paginatorOffset={activeIndex}
                    numberOfProducts={isMobile ? 4 : 6}
                />
            </ContentWrapper>

            <Paginator
                activeIndex={activeIndex}
                numberOfPages={filteredProducts.length / numberOfProducts}
                handleChange={clickHandler}
            />

            <MobileFilters headingOne="Filter" headingTwo="Price range" />
        </section>
    );
};
