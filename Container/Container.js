"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _withStyles = _interopRequireDefault(require("../styles/withStyles"));
var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var qdvstyles = function qdvstyles(theme) {
    return {
        root: (0, _defineProperty2.default)({
            width: '100%',
            marginLeft: 'auto',
            boxSizing: 'border-box',
            marginRight: 'auto',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            display: 'block'
            }, theme.breakpoints.up('sm'), {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3)
        }),
        disableGutters: {
            paddingLeft: 0,
            paddingRight: 0
        },
        fixed: Object.keys(theme.breakpoints.values).reduce(function (acc, breakpoint) {
            var value = theme.breakpoints.values[breakpoint];

            if(value !== 0) {
                acc[theme.breakpoints.up(breakpoint)] = {
                    maxWidth: value
                }
            }

            return acc;
        }, {}),
        maxWidthXs: (0, _defineProperty2.default)({}, theme.breakpoints.up('xs'), {
            maxWidth: Math.max(theme.breakpoints.values.xs, 444)
        }),
    
        /* Styles applied to the root element if `maxWidth="sm"`. */
        maxWidthSm: (0, _defineProperty2.default)({}, theme.breakpoints.up('sm'), {
        maxWidth: theme.breakpoints.values.sm
        }),
    
        /* Styles applied to the root element if `maxWidth="md"`. */
        maxWidthMd: (0, _defineProperty2.default)({}, theme.breakpoints.up('md'), {
        maxWidth: theme.breakpoints.values.md
        }),
    
        /* Styles applied to the root element if `maxWidth="lg"`. */
        maxWidthLg: (0, _defineProperty2.default)({}, theme.breakpoints.up('lg'), {
        maxWidth: theme.breakpoints.values.lg
        }),
    
        /* Styles applied to the root element if `maxWidth="xl"`. */
        maxWidthXl: (0, _defineProperty2.default)({}, theme.breakpoints.up('xl'), {
        maxWidth: theme.breakpoints.values.xl
        })
    };
};
exports.qdvstyles = qdvstyles;
var Container = /*#__PURE__*/React.forwardRef(function Container(props, ref) {
    var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$fixed = props.fixed,
      fixed = _props$fixed === void 0 ? false : _props$fixed,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'lg' : _props$maxWidth,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);

    return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
        className: (0, _clsx.default)(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes["maxWidth".concat((0, _capitalize.default)(String(maxWidth)))]),
        ref: ref
    }, other))
})

process.env.NODE_ENV !== 'production' ? Container.propTypes = {
    children: _propTypes.default
    /* @typescript-to-proptypes-ignore */
    .node.isRequired,
    classes: _propTypes.default.object,
    component: _propTypes.default
    /* @typescript-to-proptypes-ignore */
    .elementType,
    disableGutters: _propTypes.default.bool,
    fixed: _propTypes.default.bool,
    maxWidth: _propTypes.default.oneOf(['lg', 'md', 'sm', 'xl', 'xs', false])
} : void 0;

var _default = (0, _withStyles.default)(qdvstyles, {
    name: 'QdvContainer'
  })(Container);
  
  exports.default = _default;