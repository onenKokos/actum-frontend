import styled from "styled-components";
import type { ChangeEvent, FC } from "react";

import SortIcon from "../../../public/icons/sort.svg";
import { useSortContext } from "../../hooks";
import { Attributes } from "../../context";

const FilterRoot = styled.div`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        display: inline-flex;
        align-items: center;
        gap: 1.5rem;
    }
`;

const IconButton = styled.button`
    background-color: inherit;
    cursor: pointer;
    border: none;
    padding: 0;
`;

const Text = styled.span`
    font-size: 2.2rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colors.font};
`;

const Select = styled.select`
    border: none;
    outline: none;
    background-color: inherit;
    font-size: 2.2rem;
    padding: 0;
`;

export const Sort: FC = () => {
    const { toggleOrder, setAttr } = useSortContext();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setAttr(e.target.value as Attributes);
    };

    return (
        <FilterRoot>
            <IconButton onClick={toggleOrder}>
                <SortIcon />
            </IconButton>
            <Text>Sort by</Text>
            <Select onChange={handleChange}>
                <option value={"price"}>Price</option>
                <option value={"name"}>Name</option>
            </Select>
        </FilterRoot>
    );
};
