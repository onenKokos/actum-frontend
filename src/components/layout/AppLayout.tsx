import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Header } from "./Header/Header";
import { Container } from "./Container";

type PageLayoutProps = {
    children?: ReactNode;
};

const Root = styled(Container)`
    padding-top: 0;
`;

export const PageLayout: FC<PageLayoutProps> = ({ children }) => (
    <>
        <Header />
        <main>
            <Root>{children}</Root>
        </main>
    </>
);
