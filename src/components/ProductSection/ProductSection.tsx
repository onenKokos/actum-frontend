import styled from "styled-components";
import type { FC } from "react";

import { ProductsHeading } from "./ProductsHeading";
import { MobileFilterToggle } from "./MobileFilterToggle";
import { Sort } from "./Sort";
import { DesktopFilters } from "./DesktopFilters";
import { Products } from "./Products";

const Root = styled.section``;

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

export const ProductSection: FC = () => (
    <Root>
        <TopContainer>
            <ProductsHeading heading="Materials" subheading="Premium Photos" />
            <Sort />
            <MobileFilterToggle />
        </TopContainer>

        <ContentWrapper>
            <DesktopFilters headingOne="Materials" headingTwo="Price range" />
            <Products />
        </ContentWrapper>
    </Root>
);
