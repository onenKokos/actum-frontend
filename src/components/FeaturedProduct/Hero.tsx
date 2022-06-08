import styled from "styled-components";
import type { FC } from "react";

type HeroProps = {
    mobile: string;
    desktop: string;
    alt: string;
};

const HeroRoot = styled.div`
    width: 100%;
    height: 23.3rem;
    position: relative;
    margin-bottom: 2.4rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        height: 55.3rem;
        margin-bottom: 6rem;
        width: 100%;
        order: 2;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const FeaturedTag = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
    font-size: 1.5rem;
    padding: 2rem 7rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        font-size: 2rem;
    }
`;

export const Hero: FC<HeroProps> = ({ alt, desktop, mobile }) => (
    <HeroRoot>
        <picture>
            <source srcSet={desktop} media="(min-width:90em)" />
            <img loading="lazy" alt={alt} src={mobile} />
        </picture>
        <FeaturedTag>Featured</FeaturedTag>
    </HeroRoot>
);
