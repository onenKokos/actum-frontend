import styled from "styled-components";
import type { FC } from "react";

import { H2 } from "../TypoGraphy";

const ImagesContainer = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.4rem;
    margin-bottom: 2rem;
`;

const RecommendedImage = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 104 / 131;
`;

type Image = {
    src: string;
    alt: string;
};

type RecommendedProps = {
    heading: string;
    images: Image[];
};

export const Recommended: FC<RecommendedProps> = ({ heading, images }) => (
    <div>
        <H2 text={heading} />
        <ImagesContainer>
            {images.map(({ src, alt }: Image) => (
                <RecommendedImage
                    src={src}
                    key={`k__${alt}`}
                    alt={alt}
                    loading="lazy"
                />
            ))}
        </ImagesContainer>
    </div>
);
