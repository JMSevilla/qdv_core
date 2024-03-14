import * as React from "react";
import { OverridableComponent, OverrideProps } from "../OverridableComponent";

export interface ContainerTypeMap<P = {}, D extends React.ElementType = "div"> {
  props: P & {
    children: NonNullable<React.ReactNode>;
    /**
     * If `true`, the left and right padding is removed.
     */
    disableGutters?: boolean;
    /**
     * Set the max-width to match the min-width of the current breakpoint.
     * This is useful if you'd prefer to design for a fixed set of sizes.
     */
    fixed?: boolean;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  };
  defaultComponent: D;
  classKey: ContainerClassKey;
}

declare const Container: OverridableComponent<ContainerTypeMap>;
export type ContainerClassKey =
  | "root"
  | "disableGutters"
  | "fixed"
  | "maxWidthXs"
  | "maxWidthSm"
  | "maxWidthMd"
  | "maxWidthLg"
  | "maxWidthXl";

export type ContainerProps<
  D extends React.ElementType = ContainerTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ContainerTypeMap<P, D>, D>;

export default Container;
