import * as React from "react";
import {
  borders,
  ComposedStyleFunction,
  display,
  flexbox,
  grid,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  text,
  PropsFor,
} from "@qodev/system";
import { Omit } from "..";

type ContainStyleFunction = ComposedStyleFunction<
  [
    typeof borders,
    typeof display,
    typeof flexbox,
    typeof grid,
    typeof palette,
    typeof positions,
    typeof shadows,
    typeof sizing,
    typeof spacing,
    typeof text
  ]
>;

type SystemProps = PropsFor<ContainStyleFunction>;
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, keyof SystemProps>;

export interface ContainProps extends ElementProps, SystemProps {
  component?: React.ElementType;
  clone?: boolean;
  /**
   * Will declare as deprecated soon
   * kindly use `qvstyleX`
   */
  css?: SystemProps;
  qdvstyleX?: SystemProps;
}

declare const Contain: React.ComponentType<ContainProps>;

export default Contain;
