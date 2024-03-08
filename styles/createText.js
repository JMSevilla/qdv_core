"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createText;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _utils = require("@qodev/utils");

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (process.env.NODE_ENV !== 'production') {
    if (!warnedOnce) {
      console.warn(['Qodev-UI: The `theme.typography.round` helper is deprecated.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';


function createText(palette, text) {
  var _ref = typeof text === 'function' ? text(palette) : text,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allDesigns = _ref.allDesigns,
      pxToRem2 = _ref.pxToRem,
      other = (0, _objectWithoutProperties2.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allDesigns", "pxToRem"]);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof fontSize !== 'number') {
      console.error('Qodev-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Qodev-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildDesign = function buildDesign(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0, _extends2.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allDesigns);
  };

  var designs = {
    h1: buildDesign(fontWeightLight, 96, 1.167, -1.5),
    h2: buildDesign(fontWeightLight, 60, 1.2, -0.5),
    h3: buildDesign(fontWeightRegular, 48, 1.167, 0),
    h4: buildDesign(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildDesign(fontWeightRegular, 24, 1.334, 0),
    h6: buildDesign(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildDesign(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildDesign(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildDesign(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildDesign(fontWeightRegular, 14, 1.43, 0.15),
    button: buildDesign(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildDesign(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildDesign(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0, _utils.deepmerge)((0, _extends2.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, designs), other, {
    clone: false // No need to clone deep

  });
}