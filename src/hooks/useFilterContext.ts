import { useContext } from "react";
import { FilterContext } from "../context";

export const useFilterContext = () => useContext(FilterContext);
