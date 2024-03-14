"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _system = require("@qodev/system");

var _qdvstyled = _interopRequireDefault(require("../styles/styled"));

var qdvstyleFunction = (0, _system.styleFunctionSx)((0, _system.compose)(_system.borders, _system.display, _system.flexbox, _system.grid, _system.positions, _system.palette, _system.shadows, _system.sizing, _system.spacing, _system.text));

exports.qdvstyleFunction = qdvstyleFunction;
var Contain = (0, _qdvstyled.default)('div')(qdvstyleFunction, {
    name: 'QdvContain'
});
var _default = Contain;
exports.default = _default;