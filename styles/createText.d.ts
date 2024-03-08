import { Palette } from "./createPalette";
import * as React from "react";
import { CSSProperties } from "./withStyles";

export type Design =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline";

export interface FontStyle
  extends Required<{
    fontFamily: React.CSSProperties["fontFamily"];
    fontSize: number;
    fontWeightLight: React.CSSProperties["fontWeight"];
    fontWeightRegular: React.CSSProperties["fontWeight"];
    fontWeightMedium: React.CSSProperties["fontWeight"];
    fontWeightBold: React.CSSProperties["fontWeight"];
  }> {}

export interface FontStyleOptions extends Partial<FontStyle> {
  htmlFontSize?: number;
  allVariants?: React.CSSProperties;
}

// TODO: which one should actually be allowed to be subject to module augmentation?
// current type vs interface decision is kept for historical reasons until we
// made a decision
export type TextStyle = CSSProperties;
export interface TextStyleOptions extends TextStyle {}

export interface TextUtils {
  pxToRem: (px: number) => string;
}

export interface Text
  extends Record<Variant, TextStyle>,
    FontStyle,
    TextUtils {}

export interface TextOptions
  extends Partial<Record<Variant, TextStyleOptions> & FontStyleOptions> {}

export default function createText(
  palette: Palette,
  text: TextOptions | ((palette: Palette) => TextOptions)
): Text;
