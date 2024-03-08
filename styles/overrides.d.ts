import { CSSProperties, StyleRules } from "./withStyles";
import { TypographyClassKey } from "../Typography";

export type Overrides = {
  [Name in keyof ComponentNameToClassKey]?: Partial<
    StyleRules<ComponentNameToClassKey[Name]>
  >;
} & {
  MuiCssBaseline?: {
    "@global"?: {
      "@font-face"?: CSSProperties["@font-face"];
    } & Record<string, CSSProperties["@font-face"] | CSSProperties>; // allow arbitrary selectors
  };
};

export interface ComponentNameToClassKey {
  MuiTypography: TypographyClassKey;
}
