import styled from "styled-components";
import type { FC } from "react";
import Link from "next/link";

import Icon from "../../../../public/logo.svg";

const LogoRoot = styled.a`
    height: 3.2rem;
`;

export const Logo: FC = () => (
    <Link href="/">
        <LogoRoot>
            <Icon />
        </LogoRoot>
    </Link>
);
