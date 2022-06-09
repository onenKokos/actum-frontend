import { useContext } from "react";
import { ActiveProductsContext } from "../context";

export const useActiveProductsContext = () => useContext(ActiveProductsContext);
