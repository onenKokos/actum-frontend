import { ThemeProvider } from "styled-components";
import { theme, globalStyle as GlobalStyle } from "../styled";
import type { FC } from "react";
import type { AppProps } from "next/app";

import { PageLayout } from "../components/layout";
import {
    CartContextProvider,
    SortContextProvider,
    FilterContextProvider,
    ActiveProductsContextProvider,
} from "../context";

// just for testing
import { products } from "../contants/mock";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <CartContextProvider>
                    <SortContextProvider>
                        <FilterContextProvider>
                            <ActiveProductsContextProvider products={products}>
                                <PageLayout>
                                    <Component {...pageProps} />
                                </PageLayout>
                            </ActiveProductsContextProvider>
                        </FilterContextProvider>
                    </SortContextProvider>
                </CartContextProvider>
            </ThemeProvider>
        </>
    );
};

export default CustomApp;
