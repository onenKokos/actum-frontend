import { createContext } from "react";

export const defaultMaterialsState = {
    wood: false,
    concrete: false,
    brick: false,
    glass: false,
    steel: false,
    carbonFloor: false,
    copper: false,
};

export type Materials = typeof defaultMaterialsState;

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