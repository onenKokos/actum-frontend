import "styled-components";
import { theme } from "./theme";

declare module "styled-components" {
    type Theme = typeof theme;

    // eslint-disable-next-line -- TODO
    export interface DefaultTheme extends Theme {}
}
