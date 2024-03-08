import { Theme } from "./createTheme";
import { Breakpoint } from "./createBreakpoints";
import { Variant } from "./createText";

export interface ResponsiveFontSizesOptions {
  breakpoints?: Breakpoint[];
  disableAlign?: boolean;
  factor?: number;
  variants?: Variant[];
}

export default function responsiveFontSizes(
  theme: Theme,
  options?: ResponsiveFontSizesOptions
): Theme;
