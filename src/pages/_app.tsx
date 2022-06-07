import { ThemeProvider } from "styled-components";
import { theme, globalStyle as GlobalStyle } from "../styled";
import type { FC } from "react";
import type { AppProps } from "next/app";
import { PageLayout } from "../components/layout";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </ThemeProvider>
        </>
    );
};

export default CustomApp;
