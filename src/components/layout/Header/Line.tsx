import styled from "styled-components";
import type { FC } from "react";

const LineRoot = styled.hr`
    border: 4px solid ${({ theme }) => theme.colors.muted};
    width: calc(100% + 4rem);
    transform: translateX(-2rem);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        width: 100%;
        transform: none;
    }
`;

export const Line: FC = () => <LineRoot />;
