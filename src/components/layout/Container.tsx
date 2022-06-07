import type { ReactNode, FC } from "react";
import styled from "styled-components";

const Root = styled.div`
    padding: 3.4rem 2rem;
`;

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => (
    <Root className={className}>{children}</Root>
);
