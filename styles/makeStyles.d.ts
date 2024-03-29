import { Theme as DefaultTheme } from "./createTheme";
import {
  ClassNameMap,
  Styles,
  WithStylesOptions,
} from "@qodev/styles/withStyles";

import { Omit } from "@qodev/types";

export default function makeStyles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, "withTheme">
): keyof Props extends never // `makeStyles` where the passed `styles` do not depend on props
  ? (props?: any) => ClassNameMap<ClassKey> // `makeStyles` where the passed `styles` do depend on props
  : (props: Props) => ClassNameMap<ClassKey>;
