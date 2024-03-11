"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.qdvstyles = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _colorManipulator = require("../styles/colorManipulator");

var _ButtonBase = _interopRequireDefault(require("../ButtonBase"));

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var qdvstyles = function qdvstyles(theme) {
    return {
        root: (0, _extends2.default)({}, theme.typography.button, {
            boxSizing: 'border-box',
            minWidth: 64,
            padding: '6px 16px',
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.text.primary,
            transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
                duration: theme.transitions.duration.short
            }),
            '&:hover': {
                textDecoration: 'none',
                backgroundColor: (0, _colorManipulator.alpha)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
                '@media (hover: none)': {
                    backgroundColor: 'transparent'
                },
                '&$disabled': {
                    backgroundColor: 'transparent'
                }
            },
            '&$disabled': {
                color: theme.palette.action.disabled
            }
        }),
        label: {
            width: '100%',
            // Ensure the correct width for iOS Safari
            display: 'inherit',
            alignItems: 'inherit',
            justifyContent: 'inherit'
        },
        text: {
            padding: '6px 8px'
        },
        // Styles applied to the root element if `variant="default"`.
        purple: {
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '0.375rem',
            backgroundColor: '#4f46e5',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            paddingTop: '0.375rem',
            paddingBottom: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
            color: '#ffffff',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            '&:hover': {
              backgroundColor: '#4338ca',
            },
            '&:focus': {
              outline: '2px solid transparent',
              outlineOffset: '2px',
            },
            '&:focus-visible': {
              '--tw-ring-color': '#4f46e5',
              '--tw-ring-offset-color': '#4f46e5',
              boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.5)',
            },
        },
        default: {
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '0.375rem',
            backgroundColor: '#6D28D9',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            paddingTop: '0.375rem',
            paddingBottom: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
            color: '#ffffff',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            '&:hover': {
              backgroundColor: '#5B21B6',
              color: '#ffffff'
            },
            '&:focus': {
              outline: '2px solid transparent',
              outlineOffset: '2px',
            },
            '&:focus-visible': {
              '--tw-ring-color': '#4f46e5',
              '--tw-ring-offset-color': '#4f46e5',
              boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.5)',
            },
        },
        alternative: {
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '0.375rem',
            backgroundColor: '#ffffff',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            paddingTop: '0.375rem',
            paddingBottom: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
            color: '#111827',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            '&:hover': {
                color: '#1D4ED8',
                backgroundColor: '#F3F4F6' 
            },
            '&:focus': {
              outline: '2px solid transparent',
              outlineOffset: '2px',
            },
            '&:focus-visible': {
              '--tw-ring-color': '#4f46e5',
              '--tw-ring-offset-color': '#4f46e5',
              boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.5)',
            },
        },
        dark: {
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '0.375rem',
            backgroundColor: '#1F2937',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            paddingTop: '0.375rem',
            paddingBottom: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
            color: '#ffffff',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            '&:hover': {
              backgroundColor: '#111827',
            },
            '&:focus': {
              outline: '2px solid transparent',
              outlineOffset: '2px',
            },
            '&:focus-visible': {
              '--tw-ring-color': '#4f46e5',
              '--tw-ring-offset-color': '#4f46e5',
              boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.5)',
            },
        },
        light: {
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '0.375rem',
            backgroundColor: '#ffffff',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            paddingTop: '0.375rem',
            paddingBottom: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
            color: '#111827',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            '&:hover': {
              backgroundColor: '#F3F4F6',
            },
            '&:focus': {
              outline: '2px solid transparent',
              outlineOffset: '2px',
            },
            '&:focus-visible': {
              '--tw-ring-color': '#4f46e5',
              '--tw-ring-offset-color': '#4f46e5',
              boxShadow: '0 0 0 2px rgba(79, 70, 229, 0.5)',
            },
        },
        disableElevation: {
            boxShadow: 'none',
            '&:hover': {
                boxShadow: 'none'
            },
            '&$focusVisible': {
                boxShadow: 'none'
            },
            '&:active': {
            boxShadow: 'none'
            },
            '&$disabled': {
            boxShadow: 'none'
            }
        },
        focusVisible: {},
        disabled: {},
        colorInherit: {
            color: 'inherit',
            borderColor: 'currentColor'
        },
        textSizeSmall: {
            padding: '4px 5px',
            fontSize: theme.typography.pxToRem(13)
        },
        startIcon: {
            display: 'inherit',
            marginRight: 8,
            marginLeft: -4,
            '&iconSizeSmall': {
                marginLeft: -2
            }
        },
        endIcon: {
            display: 'inherit',
            marginRight: -4,
            marginLeft: 8,
            '&$iconSizeSmall': {
                marginRight: -2
            }
        },
        iconSizeSmall: {
            '& > *:first-child': {
                fontSize: 18
            }
        },
        /* Styles applied to the icon element if supplied and `size="medium"`. */
        iconSizeMedium: {
            '& > *:first-child': {
            fontSize: 20
            }
        },
    
        /* Styles applied to the icon element if supplied and `size="large"`. */
        iconSizeLarge: {
            '& > *:first-child': {
            fontSize: 22
            }
        }
    }
}

exports.qdvstyles = qdvstyles;
var Button = /*#__PURE__*/React.forwardRef(function Button(props, ref) {
    var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      endIconProp = props.endIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      startIconProp = props.startIcon,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$design = props.design,
      design = _props$design === void 0 ? 'text' : _props$design,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "design"]);
    var startIcon = startIconProp && /*#__PURE__*/React.createElement("span", {
        className: (0, _clsx.default)(classes.startIcon, classes["iconSize".concat((0, _capitalize.default)(size))])
    }, startIconProp);
    var endIcon = endIconProp && /*#__PURE__*/React.createElement("span", {
        className: (0, _clsx.default)(classes.endIcon, classes["iconSize".concat((0, _capitalize.default)(size))])
    }, endIconProp);
    return /*#__PURE__*/React.createElement(_ButtonBase.default, (0, _extends2.default)({
        className: (0, _clsx.default)(classes.root, classes[design], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(design).concat((0, _capitalize.default)(color))], size !== 'medium' && [classes["".concat(design, "Size").concat((0, _capitalize.default)(size))], classes["size".concat((0, _capitalize.default)(size))]],
        disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
        component: component,
        disabled: disabled,
        focusRipple: !disableFocusRipple,
        focusVisibleClassName: (0, _clsx.default)(classes.focusVisible, focusVisibleClassName),
        ref: ref,
        type: type
    }, other), /*#__PURE__*/React.createElement("span", {
        className: classes.label
    }, startIcon, children, endIcon));
});
process.env.NODE_ENV !== "production" ? Button.propTypes = {
    children: _propTypes.default.node,
    classes: _propTypes.default.object,
    className: _propTypes.default.string,
    color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
    component: _propTypes.default
    /* @typescript-to-proptypes-ignore */
    .elementType,
    disabled: _propTypes.default.bool,
    disableElevation: _propTypes.default.bool,
    disableFocusRipple: _propTypes.default.bool,
    disableRipple: _propTypes.default.bool,
    endIcon: _propTypes.default.node,
    focusVisibleClassName: _propTypes.default.string,
    fullWidth: _propTypes.default.bool,
    href: _propTypes.default.string,
    size: _propTypes.default.oneOf(['large', 'medium', 'small']),
    startIcon: _propTypes.default.node,
    type: _propTypes.default.oneOfType([_propTypes.default.oneOf(['button', 'reset', 'submit']), _propTypes.default.string]),
    design: _propTypes.default.oneOf(['default', 'alternative', 'dark', 'light', 'purple'])
} : void 0;

var _default = (0, _withStyles.default)(qdvstyles, {
    name: 'QdvButton'
})(Button);

exports.default = _default;