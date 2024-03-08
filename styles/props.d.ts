import { TypographyProps } from "../Typography";

export type ComponentsProps = {
  [Name in keyof ComponentsPropsList]?: Partial<ComponentsPropsList[Name]>;
};

export interface ComponentsPropsList {
  MuiTypography: TypographyProps;
}
