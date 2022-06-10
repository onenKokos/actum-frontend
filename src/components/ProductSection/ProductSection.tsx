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
import { useIsMobile } from "../../hooks";
import { useActiveProductsContext } from "../../hooks/useActiveProductsContext";

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContentWrapper = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        display: grid;
        grid-template-columns: 38.8rem auto;
        grid-gap: 5rem;
    }
`;

export const ProductSection: FC = () => {
    const { products } = useActiveProductsContext();
    const { isMobile } = useIsMobile();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const numberOfProducts = isMobile ? 4 : 6;

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
                    products={products}
                    paginatorOffset={activeIndex}
                    numberOfProducts={isMobile ? 4 : 6}
                />
            </ContentWrapper>

            <Paginator
                activeIndex={activeIndex}
                numberOfPages={products.length / numberOfProducts}
                handleChange={clickHandler}
            />

            <MobileFilters headingOne="Filter" headingTwo="Price range" />
        </section>
    );
};
