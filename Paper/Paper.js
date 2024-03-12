"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.styles = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _utils = require("@qodev/utils");
var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var qdvstyles = function qdvstyles(theme) {
    var shadows = {};
    theme.shadows.forEach(function (shadow, index) {
        shadows["shadow".concat(index)] = {
            boxShadow: shadow
        };
    });
    return (0, _extends2.default)({
        root: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            transition: theme.transitions.create('box-shadow')
        }
    }, shadows);
};

exports.qdvstyles = qdvstyles;
var Paper = /*#__PURE__*/React.forwardRef(function Paper(props, ref) {
    var classes = props.classes,
        className = props.className,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _props$square = props.square,
        square = _props$square === void 0 ? false : _props$square,
        _props$shadow = props.shadow,
        shadow = _props$shadow === void 0 ? 1 : _props$shadow,
        _props$design = props.design,
        design = _props$design === void 0 ? 'shadow' : _props$design,
        other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "square", "shadow", "design"]);
    return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
        className: (0, _clsx.default)(classes.root, className, design === 'outlined' ? classes.outlined : classes["shadow".concat(shadow)], !square && classes.rounded),
        ref: ref
    }, other));
});
process.env.NODE_ENV !== "production" ? Paper.propTypes = {
    children: _propTypes.default.node,
    classes: _propTypes.default.object,
    className: _propTypes.default.string,
    component: _propTypes.default
    /* @typescript-to-proptypes-ignore */
    .elementType,
    shadow: (0, _utils.chainPropTypes)(_propTypes.default.number, function(props) {
        var classes = props.classes,
            shadow = props.shadow;

        if(classes === undefined) {
            return null;
        }

        if(shadow != null && classes["shadow".concat(shadow)] === undefined) {
            return new Error("Qodev-UI: This shadow `".concat(shadow, "` is not implemented."));
        }

        return null;
    }),
    square: _propTypes.default.bool,
    design: _propTypes.default.oneOf(['shadow', 'outlined'])
} : void 0;

var _default = (0, _withStyles.default)(qdvstyles, {
    name: 'QdvPaper'
})(Paper);

exports.default = _default;