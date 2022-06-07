import styled from "styled-components";
import type { FC } from "react";
import Link from "next/link";

import { Container } from "./Container";
import { Cart } from "./Cart";
import Logo from "../../../public/logo.svg";

const Root = styled.header`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.muted};
`;

const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

export const Header: FC = () => (
    <Root>
        <HeaderContainer>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <Cart />
        </HeaderContainer>
    </Root>
);
