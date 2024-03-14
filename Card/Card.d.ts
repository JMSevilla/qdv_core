import { StandardProps } from "..";
import { PaperProps } from "../Paper";
import * as React from "react";

export interface CardProps extends StandardProps<PaperProps, CardClassKey> {
  raised?: boolean;
  children: React.ReactNode;
}

export type CardClassKey = "root";

export default function Card(props: CardProps): JSX.Element;
