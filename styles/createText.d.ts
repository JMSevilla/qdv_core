import { Palette } from "./createPalette";
import * as React from "react";
import { CSSProperties } from "./withStyles";

export type Design =
  | "header1"
  | "header2"
  | "header3"
  | "header4"
  | "header5"
  | "header6"
  | "subtitle1"
  | "subtitle2"
  | "default1"
  | "default2"
  | "caption"
  | "rock"
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
