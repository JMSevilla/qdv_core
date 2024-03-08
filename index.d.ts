import * as React from "react";
import { Omit } from "@qodev/types";
import { StyledComponentProps } from "./styles";
export { StyledComponentProps };

/**
 * @deprecated
 * Import from `@qodev/types` instead
 *
 * TODO: to remove in v5
 */
export { Omit };

/**
 * All standard components exposed by `qodev` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 */
export type StandardProps<
  C,
  ClassKey extends string,
  Removals extends keyof C = never
> = Omit<C, "classes" | Removals> &
  StyledComponentProps<ClassKey> & {
    className?: string;
    ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    style?: React.CSSProperties;
  };

export type PaletteType = "light" | "dark";
export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export namespace PropTypes {
  type Alignment = "inherit" | "left" | "center" | "right" | "justify";
  type Color = "inherit" | "primary" | "secondary" | "default";
  type Margin = "none" | "dense" | "normal";
}

// From index.js
import * as colors from "./colors";

export { colors };
export * from "./styles";

export * from "./utils";

export { default as Text } from "./Text";
export * from "./Text";
