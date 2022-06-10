import { useState, useMemo, useCallback } from "react";
import type { FC, ReactNode } from "react";

import { FilterContext } from "./FilterContext";
import { Materials, defaultMaterialsState } from "./FilterContext";

type FilterContextProps = {
    children: ReactNode;
};

export const FilterContextProvider: FC<FilterContextProps> = ({ children }) => {
    const [materials, setMaterials] = useState<Materials>(
        defaultMaterialsState
    );
    const [price, setPrice] = useState<number>(5);
    const [expanded, setIsExpanded] = useState<boolean>(false);

    const isMobileFilterVisible = useMemo(() => {
        return expanded;
    }, [expanded]);

    const toggleMobileFilter = useCallback(() => {
        setIsExpanded(!expanded);
    }, [expanded]);

    const priceRange = useMemo(() => {
        return price;
    }, [price]);

    const activeFilters = useMemo(() => {
        return materials;
    }, [materials]);

    const setPriceRange = useCallback(
        (payload: number) => {
            setPrice(payload);
        },
        [price]
    );

    const setFilters = useCallback(
        (payload: Materials) => {
            setMaterials(payload);
        },
        [materials]
    );

    const filtersOff = useMemo(() => {
        let numberOfActiveFilters = 0;
        Object.keys(activeFilters).forEach((k) => {
            if (activeFilters[k] === true) {
                numberOfActiveFilters++;
            }
        });

        return numberOfActiveFilters === 0;
    }, [activeFilters]);

    return (
        <FilterContext.Provider
            value={{
                priceRange,
                activeFilters,
                setPriceRange,
                setFilters,
                isMobileFilterVisible,
                toggleMobileFilter,
                filtersOff,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
