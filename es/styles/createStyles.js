import { createStyles as createStylesOriginal } from '@qodev/styles'; // let warnOnce = false;
// To remove in v5

export default function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Qodev-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @qodev/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return createStylesOriginal(styles);
}