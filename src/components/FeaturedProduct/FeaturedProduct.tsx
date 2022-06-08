import styled from "styled-components";
import type { FC } from "react";

import { H1 } from "../TypoGraphy";
import { Button } from "../Button";
import { Hero } from "./Hero";
import { About } from "./About";
import { Details } from "./Details";
import { Recommended } from "./Recommended";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const FeaturedProductButton = styled(Button)`
    order: 1;
    margin-bottom: 4rem;
`;

const SectionWrapper = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        display: grid;
        grid-template-areas: "a a" "b ." "c .";

        & > div:first-child {
            grid-area: a;
        }

        & > div:nth-child(2) {
            grid-area: b;
        }

        & > div:nth-child(3) {
            grid-area: c;
        }
    }
`;

export const FeaturedProduct: FC = () => {
    return (
        <section>
            <Wrapper>
                <H1 text="Recycled Plastic" />
                <FeaturedProductButton
                    onClick={() => console.log("Add to cart!")}
                    variant="dark"
                    text="Add to cart"
                />
                <Hero
                    alt="Feature"
                    mobile="/img/feature-mobile.png"
                    desktop="/img/feature-desktop.png"
                />
            </Wrapper>
            <SectionWrapper>
                <About
                    heading="About the Recycled Materials"
                    subheading="Plastic"
                    text="Plastic recycling is the reprocessing of plastic waste into new and useful products. When performed correctly, this can reduce dependence on landfill, conserve resources and protect the environment from plastic pollution and greenhouse gas emissions. Although recycling rates are increasing, they lag behind those of other recoverable materials, such as aluminium, glass and paper. The global recycling rate in 2015 was 19.5%, while 25.5% was incinerated and the remaining 55% disposed of to landfill. Since the beginning of plastic production in the 20th century, until 2015, the world has produced some 6.3 billion tonnes of plastic waste, only 9% of which has been recycled, and only ~1% has been recycled more than once.[6]"
                />
                <Recommended
                    heading="Materials people also use"
                    images={[
                        {
                            src: "/img/feature-recommended-1.png",
                            alt: "recommended-1",
                        },
                        {
                            src: "/img/feature-recommended-2.png",
                            alt: "recommended-2",
                        },
                        {
                            src: "/img/feature-recommended-3.png",
                            alt: "recommended-3",
                        },
                    ]}
                />
                <Details
                    heading="Details"
                    items={["Weight: 2340g/m2", "Thickness: 3cm"]}
                />
            </SectionWrapper>
        </section>
    );
};
