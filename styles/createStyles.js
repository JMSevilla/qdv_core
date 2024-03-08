"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStyles;

var _styles = require("@qodev/styles");

// let warnOnce = false;
// To remove in v5
function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Qodev-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @qodev/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0, _styles.createStyles)(styles);
}