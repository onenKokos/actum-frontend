import type { ReactNode, FC } from "react";
import styled from "styled-components";

const Root = styled.div`
    padding: 3.4rem 2rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        max-width: 129rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0;
        padding-right: 0;
    }
`;

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => (
    <Root className={className}>{children}</Root>
);
