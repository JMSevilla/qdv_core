
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  colors: true,
  Text: true,
  ButtonBase: true,
  Button: true
};

Object.defineProperty(exports, "ButtonBase", {
  enumerable: true,
  get: function get() {
    return _ButtonBase.default;
  }
});

Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});

var _Text = _interopRequireWildcard(require("./Text"));

Object.keys(_Text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Text[key];
    }
  });
});

var _ButtonBase = _interopRequireWildcard(require("./ButtonBase"));

Object.keys(_ButtonBase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ButtonBase[key];
    }
  });
});

var _Button = _interopRequireWildcard(require("./Button"));

Object.keys(_Button).forEach(function (key) {
  if(key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button[key];
    }
  });
})