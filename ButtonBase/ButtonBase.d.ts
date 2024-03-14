import * as React from "react";
import { TouchRippleProps } from "./TouchRipple";
import {
  OverrideProps,
  OverridableComponent,
  OverridableTypeMap,
} from "../OverridableComponent";

export interface ButtonBaseTypeMap<
  P = {},
  D extends React.ElementType = "button"
> {
  props: P & {
    /**
     * A ref for imperative actions.
     * It only supports `focusVisible()` action kung trip mo mag dagdag ikaw na.
     */
    action?: React.Ref<ButtonBaseActions>;
    /**
     * @ignore
     *
     * Use the prop to pass a ref to the native button component.
     * will deprecate soon in v5 use ref instead.
     */
    buttonRef?: React.Ref<unknown>;
    centerRipple?: boolean;
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * if true the base button will be disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, the ripple effect will be disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the `focusVisibleClassName`.
     */
    disableRipple?: boolean;
    disableTouchRipple?: boolean;
    focusRipple?: boolean;
    /**
     * This prop can help identify which element has keyboard focus.
     * The class name will be applied when the element gains the focus through keyboard interaction.
     * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
     * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
     * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
     * if needed.
     */
    focusVisibleClassName?: string;
    /**
     * Callback fired when the component is focused with a keyboard.
     * We trigger a `onFocus` callback too.
     */
    onFocusVisible?: React.FocusEventHandler<any>;
    // @types/react is stricter
    tabIndex?: string | number;
    TouchRippleProps?: Partial<TouchRippleProps>;
  };
  defaultComponent: D;
  classKey: ButtonBaseClassKey;
}

/**
 * utility to create component types that inherit props from ButtonBase.
 * This component has an additional overload if the `href` prop is set which
 * can make extension quite tricky
 */
export interface ExtendButtonBaseTypeMap<M extends OverridableTypeMap> {
  props: M["props"] & ButtonBaseTypeMap["props"];
  defaultComponent: M["defaultComponent"];
  classKey: M["classKey"];
}

export type ExtendButtonBase<M extends OverridableTypeMap> = ((
  props: { href: string } & OverrideProps<ExtendButtonBaseTypeMap<M>, "a">
) => JSX.Element) &
  OverridableComponent<ExtendButtonBaseTypeMap<M>>;

declare const ButtonBase: ExtendButtonBase<ButtonBaseTypeMap>;

export type ButtonBaseProps<
  D extends React.ElementType = ButtonBaseTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ButtonBaseTypeMap<P, D>, D>;

export type ButtonBaseClassKey = "root" | "disabled" | "focusVisible";

export interface ButtonBaseActions {
  focusVisible(): void;
}

export default ButtonBase;
