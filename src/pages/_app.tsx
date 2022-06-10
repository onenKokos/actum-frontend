import { ThemeProvider } from "styled-components";
import { theme, globalStyle as GlobalStyle } from "../styled";
import type { FC } from "react";
import type { AppProps } from "next/app";

import { PageLayout } from "../components/layout";
import {
    CartContextProvider,
    SortContextProvider,
    FilterContextProvider,
} from "../context";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <CartContextProvider>
                    <SortContextProvider>
                        <FilterContextProvider>
                            <PageLayout>
                                <Component {...pageProps} />
                            </PageLayout>
                        </FilterContextProvider>
                    </SortContextProvider>
                </CartContextProvider>
            </ThemeProvider>
        </>
    );
};

export default CustomApp;
