import { ThemeProvider } from "styled-components";
import { theme, globalStyle as GlobalStyle } from "../styled";
import type { FC } from "react";
import type { AppProps } from "next/app";

import { PageLayout } from "../components/layout";
import { CartContextProvider } from "../context/cart/CartContextProvider";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <CartContextProvider>
                    <PageLayout>
                        <Component {...pageProps} />
                    </PageLayout>
                </CartContextProvider>
            </ThemeProvider>
        </>
    );
};

export default CustomApp;
