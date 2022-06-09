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
    const [price, setPrice] = useState<number>(0);
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

    return (
        <FilterContext.Provider
            value={{
                priceRange,
                activeFilters,
                setPriceRange,
                setFilters,
                isMobileFilterVisible,
                toggleMobileFilter,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
