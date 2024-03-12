"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.qdvstyles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Paper = _interopRequireDefault(require("../Paper"));
var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var qdvstyles = {
    root: {
        overflow: 'hidden',
        padding: 16,
        '&:last-child' : {
            paddingBottom: 24
        }
    }
}
exports.qdvstyles = qdvstyles;
var Card = /*#__PURE__*/React.forwardRef(function Card(props, ref) {
    var classes = props.classes,
        className = props.className,
        _props$raised = props.raised,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        raised = _props$raised === void 0 ? false : _props$raised,
        other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "raised", "component"]);
    
    var PaperComponent = /*#__PURE__*/React.createElement(_Paper.default, (0, _extends2.default)({
        className: (0, _clsx.default)(classes.root, className),
        shadow: raised ? 8 : 1,
        ref: ref
    }, other));
    return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
        className: (0, _clsx.default)(classes.root, className),
        ref: ref
    }), PaperComponent);
});
process.env.NODE_ENV !== "production" ? Card.propTypes = {
    children: _propTypes.default.node,
    classes: _propTypes.default.object,
    className: _propTypes.default.string,
    raised: _propTypes.default.bool
}: void 0;

var _default = (0, _withStyles.default)(qdvstyles, {
    name: 'QdvCard'
})(Card);

exports.default = _default;