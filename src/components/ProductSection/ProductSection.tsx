import styled from "styled-components";
import type { FC } from "react";

import { ProductsHeading } from "./ProductsHeading";
import { MobileFilterToggle } from "./MobileFilterToggle";
import { Sort } from "./Sort";
import { DesktopFilters } from "./DesktopFilters";
import { Products } from "./Products";
import { MobileFilters } from "./MobileFilters";

// "MOCK"
import { Product, Category, Currency } from "../../types";

const products: Product[] = [
    // {
    //     bestseller: true,
    //     category: Category.Glass,
    //     currency: Currency.Usd,
    //     price: 33.78,
    //     featured: false,
    //     image: {
    //         alt: "glass",
    //         src: "/img/product-glass.png",
    //     },
    //     name: "Reinforced",
    // },
    {
        name: "Reinforced",
        category: Category.Glass,
        price: 33.78,
        currency: Currency.Usd,
        image: {
            src: "/img/product-glass__reinforced.png",
            alt: "Reinforced",
        },
        bestseller: true,
        featured: false,
    },
    {
        name: "Shape",
        category: Category.Steel,
        price: 93.89,
        currency: Currency.Usd,
        image: {
            src: "/img/product-steel__shape.png",
            alt: "shape-1",
        },
        bestseller: false,
        featured: false,
    },
    {
        name: "Wave",
        category: Category.Steel,
        price: 120.21,
        currency: Currency.Usd,
        image: {
            src: "/img/product-steel__wave.png",
            alt: "wave",
        },
        bestseller: false,
        featured: false,
    },
    {
        name: "Colored",
        category: Category.Glass,
        price: 101,
        currency: Currency.Usd,
        image: {
            src: "/img/product-glass__colored.png",
            alt: "shape-2",
        },
        bestseller: false,
        featured: false,
    },
    {
        name: "Red",
        category: Category.Brick,
        price: 101.0,
        currency: Currency.Usd,
        image: {
            alt: "brick-red",
            src: "/img/product-brick__red.png",
        },
        bestseller: false,
        featured: false,
    },
    {
        name: "Pastel",
        category: Category.Brick,
        price: 101.0,
        currency: Currency.Usd,
        image: {
            alt: "brick-red",
            src: "/img/product-brick__pastel.png",
        },
        bestseller: false,
        featured: false,
    },
    // {
    //     name: "Recycled Plastic",
    //     category: Category.Plastic,
    //     price: 101,
    //     currency: Currency.Usd,
    //     image: {
    //         src: "recycled-plastic",
    //         alt: "Recycled Plastic",
    //     },
    //     bestseller: false,
    //     featured: true,
    //     details: {
    //         weight: 2340,
    //         thickness: 2,
    //         description: "A random description",
    //         recommendations: [
    //             {
    //                 src: "recommendation-1",
    //                 alt: "recommendation-1",
    //             },
    //             {
    //                 src: "recommendation-2",
    //                 alt: "recommendation-2",
    //             },
    //             {
    //                 src: "recommendation-3",
    //                 alt: "recommendation-3",
    //             },
    //         ],
    //     },
    // },
];

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
            <Products products={products} />
        </ContentWrapper>

        <MobileFilters headingOne="Filter" headingTwo="Price range" />
    </Root>
);
