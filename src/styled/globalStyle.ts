import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        max-width: 100vw;
    }
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        line-height: 2.5rem;
        min-height: 100vh;
        width: 100%;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        background-color: hotpink;
        color: white;
    }
`;
