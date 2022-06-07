import styled from "styled-components";
import type { FC } from "react";

import { Container } from "../Container";
import { Cart } from "./Cart";
import { Logo } from "./Logo";
import { Line } from "./Line";

const Root = styled.header``;

const HeaderControls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.2rem;
`;

export const Header: FC = () => (
    <Root>
        <Container>
            <HeaderControls>
                <Logo />
                <Cart />
            </HeaderControls>
            <Line />
        </Container>
    </Root>
);
