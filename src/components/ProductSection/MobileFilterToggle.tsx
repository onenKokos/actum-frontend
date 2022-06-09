import styled from "styled-components";
import type { FC } from "react";

import { useFilterContext } from "../../hooks";
import FilterIcon from "../../../public/icons/filter.svg";

const FilterRoot = styled.button`
    cursor: pointer;
    background-color: inherit;
    display: inline-block;
    width: 2.9rem;
    height: 2.6rem;
    padding: 0;
    border: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        display: none;
    }
`;

export const MobileFilterToggle: FC = () => {
    const { toggleMobileFilter } = useFilterContext();

    return (
        <FilterRoot onClick={toggleMobileFilter}>
            <FilterIcon />
        </FilterRoot>
    );
};
