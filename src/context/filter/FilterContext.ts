import { createContext } from "react";

export const defaultMaterialsState = {
    wood: false,
    concrete: false,
    brick: false,
    glass: false,
    steel: false,
    carbonFiber: false,
    copper: false,
};

export type Materials = typeof defaultMaterialsState;

export const defaultPriceRanges = [
    { key: "lessThanTwenty", title: "Lower than $20", index: 0 },
    { key: "twentyToHundred", title: "$20 - $100", index: 1 },
    { key: "hundredToTwoHundred", title: "$100 - $200", index: 2 },
    { key: "moreThanTwoHundred", title: "More than $200", index: 3 },
];

export type PriceRange = typeof defaultPriceRanges;

type FilterContextState = {
    activeFilters: Materials;
    priceRange: number;
    isMobileFilterVisible: boolean;
    toggleMobileFilter: () => void;
    setFilters: (payload: Materials) => void;
    setPriceRange: (payload: number) => void;
};

const defaultFilterContextState: FilterContextState = {
    activeFilters: defaultMaterialsState,
    priceRange: 0,
    isMobileFilterVisible: false,
    /* eslint-disable @typescript-eslint/no-empty-function */
    toggleMobileFilter: () => {},
    setFilters: () => {},
    setPriceRange: () => {},
    /* eslint-enable */
};

export const FilterContext = createContext<FilterContextState>(
    defaultFilterContextState
);
