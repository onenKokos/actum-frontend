import styled from "styled-components";
import type { FC } from "react";

const Root = styled.h2`
    font-size: 2rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        font-size: 3rem;
        line-height: 3.2rem;
    }

    span {
        font-size: 1.8rem;
        line-height: 2rem;
        color: ${({ theme }) => theme.colors.font};
        font-weight: 400;

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
            font-size: 2.6rem;
            line-height: 3.2rem;
        }
    }
`;

type ProductsHeadingProps = {
    heading: string;
    subheading: string;
};

export const ProductsHeading: FC<ProductsHeadingProps> = ({
    heading,
    subheading,
}) => (
    <Root>
        {heading}
        {" / "}
        <span>{subheading}</span>
    </Root>
);
