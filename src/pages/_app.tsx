import { ThemeProvider } from "styled-components";

import { theme, globalStyle as GlobalStyle } from "../styled";

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
