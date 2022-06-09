import styled from "styled-components";
import type { ChangeEvent, FC } from "react";

import { useFilterContext } from "../../hooks";
import { defaultPriceRanges } from "../../context";

const Root = styled.div`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.bg}) {
        display: block;
    }
`;

const FilterHeading = styled.h3`
    font-weight: 700;
    font-size: 2.2rem;
    margin-top: 0;
    color: ${({ theme }) => theme.colors.black};
`;

const FilterSection = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.font};
    padding-bottom: 4rem;
    margin-bottom: 3rem;

    &:last-of-type {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    text-transform: capitalize;
    font-size: 2.2rem;
    line-height: 2.4rem;
    margin-bottom: 2.4rem;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const CheckBox = styled.input`
    appearance: none;
    position: relative;
    width: 2.3rem;
    height: 2.3rem;
    border: 2px solid ${({ theme }) => theme.colors.black};
    vertical-align: -4px;
    margin: 0 1rem 0 0;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        background-image: url("/icons/check.svg");
        background-size: 100%;
        background-position: center;
        visibility: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    &:checked::before {
        //  Use visibility instead of display to avoid recalculating layout
        // very cool
        visibility: visible;
    }
`;

const Radio = styled.input`
    appearance: none;
    position: relative;
    width: 2.3rem;
    height: 2.3rem;
    border: 2px solid ${({ theme }) => theme.colors.black};
    vertical-align: -4px;
    margin: 0 1rem 0 0;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        background-image: url("/icons/check.svg");
        background-size: 100%;
        background-position: center;
        visibility: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    &:checked::before {
        //  Use visibility instead of display to avoid recalculating layout
        // very cool
        visibility: visible;
    }
`;

type DesktopFiltersProps = {
    headingOne: string;
    headingTwo: string;
};

export const DesktopFilters: FC<DesktopFiltersProps> = ({
    headingOne,
    headingTwo,
}) => {
    const { activeFilters, setFilters, priceRange, setPriceRange } =
        useFilterContext();

    const handleMaterialsChange = ({
        target,
    }: ChangeEvent<HTMLInputElement>) => {
        setFilters({
            ...activeFilters,
            [target.name]: !activeFilters[target.name],
        });
    };

    const handlePriceRangeChange = ({
        target,
    }: ChangeEvent<HTMLInputElement>) => {
        setPriceRange(Number.parseInt(target.name, 10));
    };

    return (
        <Root>
            <FilterSection>
                <FilterHeading>{headingOne}</FilterHeading>
                <Form>
                    {Object.keys(activeFilters).map((key) => (
                        <Label key={`k__${key}`}>
                            <CheckBox
                                type="checkbox"
                                checked={activeFilters[key]}
                                name={key}
                                onChange={handleMaterialsChange}
                            />
                            {key}
                        </Label>
                    ))}
                </Form>
            </FilterSection>
            <FilterSection>
                <FilterHeading>{headingTwo}</FilterHeading>
                <Form>
                    {defaultPriceRanges.map(({ key, title, index }) => (
                        <Label key={key}>
                            <Radio
                                type="radio"
                                checked={priceRange === index}
                                name={index.toString()}
                                onChange={handlePriceRangeChange}
                            />
                            {title}
                        </Label>
                    ))}
                </Form>
            </FilterSection>
        </Root>
    );
};
