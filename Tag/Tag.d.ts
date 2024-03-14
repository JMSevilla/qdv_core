import * as React from "react";
import { PropTypes } from "..";
import { OverridableComponent, OverrideProps } from "../OverridableComponent";

export interface TagTypeMap<P = {}, D extends React.ElementType = "div"> {
  props: P & {
    /**
     * Avatar element
     */
    avatar?: React.ReactElement;
    /**
     * This prop isn't supported.
     * Use the `component` prop if you need to change the children structure.
     */
    children?: null;
    /**
     * If `true` the tag will appear clickable, and will raise when pressed,
     * even if the onClick prop is not defined.
     * If `false`, the tag will not be clickable, even if onClick prop is defined.
     * This can be used, for example,
     * along with the component prop to indicate an anchor Tag is clickable.
     */
    clickable?: boolean;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: Exclude<PropTypes.Color, "inherit">;
    /**
     * Override the default delete icon element. Shown only if `onDelete` is set.
     */
    deleteIcon?: React.ReactElement;
    /**
     * If `true`, the tag should be displayed in a disabled state.
     */
    disabled?: boolean;
    /**
     * Icon element
     */
    icon?: React.ReactElement;
    /**
     * The content of the label.
     */
    label?: React.ReactNode;
    /**
     * Callback function fired when the delete icon is clicked.
     * If set, the delete icon will be shown.
     */
    onDelete?: React.EventHandler<any>;
    /**
     * Size of the tag
     */
    size?: "small" | "medium";
    /**
     * The design to use.
     */
    design?: "default" | "outlined";
  };
  defaultComponent: D;
  classKey: TagClassKey;
}

declare const Tag: OverridableComponent<TagTypeMap>;
export type TagClassKey =
  | "root"
  | "sizeSmall"
  | "colorPrimary"
  | "colorSecondary"
  | "disabled"
  | "clickable"
  | "clickableColorPrimary"
  | "clickableColorSecondary"
  | "deletable"
  | "deletableColorPrimary"
  | "deletableColorSecondary"
  | "outlined"
  | "outlinedPrimary"
  | "outlinedSecondary"
  | "avatar"
  | "avatarSmall"
  | "avatarColorPrimary"
  | "avatarColorSecondary"
  | "icon"
  | "iconSmall"
  | "iconColorPrimary"
  | "iconColorSecondary"
  | "label"
  | "labelSmall"
  | "deleteIcon"
  | "deleteIconSmall"
  | "deleteIconColorPrimary"
  | "deleteIconColorSecondary"
  | "deleteIconOutlinedColorPrimary"
  | "deleteIconOutlinedColorSecondary";

export type TagProps<
  D extends React.ElementType = TagTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TagTypeMap<P, D>, D>;

export default Tag;
