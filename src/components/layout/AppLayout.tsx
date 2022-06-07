import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Header } from "./Header/Header";
import { Container } from "./Container";

const Root = styled.main``;

type PageLayoutProps = {
    children?: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ children }) => (
    <>
        <Header />
        <Root>
            <Container>{children}</Container>
        </Root>
    </>
);
