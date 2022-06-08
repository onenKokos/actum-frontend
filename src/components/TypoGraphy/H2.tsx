import styled from "styled-components";
import type { FC } from "react";

type H2Props = {
    text: string;
    className?: string;
};

const H2Root = styled.h2`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    font-size: 2.5rem;
    line-height: 2.7rem;
    margin-top: 0;
`;

export const H2: FC<H2Props> = ({ text, className }) => (
    <H2Root className={className}>{text}</H2Root>
);
