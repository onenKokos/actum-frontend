import styled from "styled-components";
import type { FC } from "react";

const ParagraphRoot = styled.p`
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: ${({ theme }) => theme.colors.font};
    margin-bottom: 2.4rem;
    margin-top: 0;
`;

type ParagraphProps = {
    text: string;
    className?: string;
};

export const Paragraph: FC<ParagraphProps> = ({ className, text }) => (
    <ParagraphRoot className={className}>{text}</ParagraphRoot>
);
