import styled from "styled-components";
import type { FC } from "react";

import CaretIcon from "../../../public/icons/caret.svg";

type PaginatorProps = {
    activeIndex: number;
    numberOfPages: number;
    // handleClick: () => void;
    handleChange: (input: number) => void;
};

const Root = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const Right = styled.button`
    background-color: inherit;
    border: none;
    padding: 0;
    outline: none;
    width: 1.3rem;
    height: 2rem;
    cursor: pointer;
`;

const Left = styled(Right)`
    transform: rotate(180deg);
`;

const NumberButton = styled.button<{ isActive: boolean }>`
    background-color: inherit;
    border: none;
    padding: 0;
    outline: none;
    font-size: 2.9rem;
    font-weight: ${({ isActive }) => (isActive ? "700" : "400")};
    color: ${({ isActive, theme }) =>
        isActive ? `${theme.colors.black}` : `${theme.colors.muted}`};
    cursor: pointer;
`;

export const Paginator: FC<PaginatorProps> = ({
    activeIndex,
    numberOfPages,
    handleChange,
}) => {
    const numberButtons: JSX.Element[] = [];

    for (let i = 0; i < numberOfPages; i++) {
        numberButtons.push(
            <NumberButton
                onClick={() => handleChange(i)}
                isActive={activeIndex === i}
                key={`k__${i}`}
            >
                {i + 1}
            </NumberButton>
        );
    }

    return (
        <Root>
            <Left onClick={() => handleChange(activeIndex - 1)}>
                <CaretIcon />
            </Left>
            {numberButtons.map((btn) => btn)}

            <Right onClick={() => handleChange(activeIndex + 1)}>
                <CaretIcon />
            </Right>
        </Root>
    );
};
