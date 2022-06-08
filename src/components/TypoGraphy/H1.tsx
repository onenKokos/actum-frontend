import styled from "styled-components";
import type { FC } from "react";

type H1Props = {
    text: string;
    className?: string;
};

const H1Root = styled.h1`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    font-size: 3.2rem;
    line-height: 3.4rem;
    margin-top: 0;
`;

export const H1: FC<H1Props> = ({ text, className }) => (
    <H1Root className={className}>{text}</H1Root>
);
