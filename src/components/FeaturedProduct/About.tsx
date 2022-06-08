import styled from "styled-components";
import type { FC } from "react";

import { H2, Paragraph } from "../../components/TypoGraphy";

const AboutParagraph = styled(Paragraph)`
    max-height: calc(6 * 2.7rem);
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        max-height: auto;
    }
`;

const SubHeading = styled(H2)`
    display: none;
    color: ${({ theme }) => theme.colors.font};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        display: block;
    }
`;

type AboutProps = {
    heading: string;
    text: string;
    subheading: string;
};

export const About: FC<AboutProps> = ({ heading, subheading, text }) => (
    <div>
        <H2 text={heading} />
        <SubHeading text={subheading} />
        <AboutParagraph text={text} />
    </div>
);
