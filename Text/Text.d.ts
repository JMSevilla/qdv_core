import * as React from "react";
import { StandardProps, PropTypes } from "..";
import {
  OverrideProps,
  OverridableTypeMap,
  OverridableComponent,
} from "../OverridableComponent";
import { Design as ThemeDesign } from "../styles/createText";

type Variant = ThemeDesign | "srOnly";

export interface TextTypeMap<P = {}, D extends React.ElementType = "span"> {
  props: P & {
    align?: PropTypes.Alignment;
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    color?:
      | "initial"
      | "inherit"
      | "primary"
      | "secondary"
      | "textPrimary"
      | "textSecondary"
      | "error";
    display?: "initial" | "block" | "inline";
    spaceBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    variant?: Variant | "inherit";
    variantMapping?: Partial<Record<Variant, string>>;
  };
  defaultComponent: D;
  classKey: TextClassKey;
}

declare const Text: OverridableComponent<TextTypeMap>;

export type TextProps<
  D extends React.ElementType = TextTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TextTypeMap<P, D>, D>;

export type TextClassKey =
  | "root"
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
  | "overline"
  | "srOnly"
  | "alignLeft"
  | "alignCenter"
  | "alignRight"
  | "alignJustify"
  | "noWrap"
  | "spaceBottom"
  | "paragraph"
  | "colorInherit"
  | "colorPrimary"
  | "colorSecondary"
  | "colorTextPrimary"
  | "colorTextSecondary"
  | "colorError"
  | "displayInline"
  | "displayBlock";

export default Text;
