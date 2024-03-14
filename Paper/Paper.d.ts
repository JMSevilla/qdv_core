import * as React from "react";
import { StandardProps } from "..";

export interface PaperProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, PaperClassKey> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * The component used for the root node.
   * Either a string to use HTML element or component.
   */
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  shadow?: number;
  square?: boolean;
  design?: "shadow";
}

export type PaperClassKey =
  | "root"
  | "rounded"
  | "outlined"
  | "shadow0"
  | "shadow1"
  | "shadow2"
  | "shadow3"
  | "shadow4"
  | "shadow5"
  | "shadow6"
  | "shadow7"
  | "shadow8"
  | "shadow9"
  | "shadow10"
  | "shadow11"
  | "shadow12"
  | "shadow13"
  | "shadow14"
  | "shadow15"
  | "shadow16"
  | "shadow17"
  | "shadow18"
  | "shadow19"
  | "shadow20"
  | "shadow21"
  | "shadow22"
  | "shadow23"
  | "shadow24";

export default function Paper(props: PaperProps): JSX.Element;
