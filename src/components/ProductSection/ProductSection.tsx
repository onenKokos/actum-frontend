import styled from "styled-components";
import type { FC } from "react";

import { ProductsHeading } from "./ProductsHeading";
import { MobileFilterToggle } from "./MobileFilterToggle";
import { Sort } from "./Sort";

const Root = styled.section``;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProductSection: FC = () => (
    <Root>
        <TopContainer>
            <ProductsHeading heading="Materials" subheading="Premium Photos" />
            <Sort />
            <MobileFilterToggle />
        </TopContainer>
    </Root>
);
