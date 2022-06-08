import styled from "styled-components";
import type { FC } from "react";

import { ProductsHeading } from "./ProductsHeading";

const Root = styled.section``;

export const ProductSection: FC = () => (
    <Root>
        <ProductsHeading heading="Materials" subheading="Premium Photos" />
    </Root>
);
