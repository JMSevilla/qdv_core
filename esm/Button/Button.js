import _objectWithoutProperties2 from "@babel/runtime/helpers/esm/objectWithoutProperties"
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles'
import { alpha } from '../styles/colorManipulator'
import ButtonBase from '../ButtonBase'
import capitalize from '../utils/capitalize';

export var qdvstyles = function qdvstyles(theme) {
    return {
        root: _extends({}, theme.typography.button, {
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
                backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
                // Reset on touch devices, it doesn't add specificity
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
    
        /* Styles applied to the root element if `variant="text"`. */
        text: {
            padding: '6px 8px'
        },
        purple: {
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
        socialFB: {
          color: '#ffffff',
          backgroundColor: '#3b5998',
          '&:hover': {
            backgroundColor: 'rgba(59, 89, 152, 0.9)', // 90% opacity
          },
          '&:focus': {
            outline: 'none',
            ring: '4px solid rgba(59, 89, 152, 0.5)', // 50% opacity
          },
          '&:focus-visible': {
            outline: 'none',
            ring: '4px solid rgba(59, 89, 152, 0.55)', // 55% opacity
          },
          fontWeight: 500,
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          paddingX: '1.25rem',
          paddingY: '0.9375rem',
          textAlign: 'center',
          display: 'inline-flex',
          alignItems: 'center',
          marginRight: '0.5rem',
          marginBottom: '0.5rem',
        },
        default: {
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '0.375rem',
            backgroundColor: '#1D4ED8',
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
                backgroundColor: '#1E40AF',
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
        green: {
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '0.375rem',
          backgroundColor: '#047857',
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
            backgroundColor: '#065F46',
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
      GDPurpleToBlue: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '0.375rem',
        backgroundColor: '#047857',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        paddingTop: '0.375rem',
        paddingBottom: '0.375rem',
        fontSize: '0.875rem',
        fontWeight: 600,
        lineHeight: '1.5rem',
        color: '#ffffff',
        backgroundImage: 'linear-gradient(to bottom right, #9F7AEA, #3B82F6)',
        '&:hover': {
          backgroundImage: 'linear-gradient(to bottom left, #9F7AEA, #3B82F6)',
        },
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        '&:focus': {
            outline: 'none',
            ring: '4px solid #81E6D9',
          },
          '&:focus-visible': {
            outline: 'none',
            ring: '4px solid #81E6D9',
            dark: {
              ring: '4px solid #1E40AF',
            },
          },
          '&:hover': {
            backgroundImage: 'linear-gradient(to bottom left, #9F7AEA, #3B82F6)',
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

        /* Pseudo-class applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Styles applied to the root element if `color="inherit"`. */
        colorInherit: {
        color: 'inherit',
        borderColor: 'currentColor'
        },

        /* Styles applied to the root element if `size="small"` and `variant="text"`. */
        textSizeSmall: {
        padding: '4px 5px',
        fontSize: theme.typography.pxToRem(13)
        },

        /* Styles applied to the root element if `size="large"` and `variant="text"`. */
        textSizeLarge: {
        padding: '8px 11px',
        fontSize: theme.typography.pxToRem(15)
        },
        filledSizeSmall: {
            padding: '4px 10px',
            fontSize: theme.typography.pxToRem(13)
        },
        filledSizeLarge: {
            padding: '8px 22px',
            fontSize: theme.typography.pxToRem(15)
        },
        sizeSmall: {},

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: 'inherit',
      marginRight: 8,
      marginLeft: -4,
      '&$iconSizeSmall': {
        marginLeft: -2
      }
    },

    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    '&$iconSizeSmall': {
        marginRight: -2
    }
    },

    /* Styles applied to the icon element if supplied and `size="small"`. */
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
    };
};
var Button = /*#__PURE__*/React.forwardRef(function Button(props, ref){
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
      other = _objectWithoutProperties2(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "design"]);

    /* issue found - socialMedia SVG don't show */
    var startIcon = startIconProp && /*#__PURE__*/React.createElement("span", {
        className: clsx(classes.startIcon, classes["iconSize".concat(capitalize(size))])
    }, startIconProp);
    
    var endIcon = endIconProp && /*#__PURE__*/React.createElement("span", {
        className: clsx(classes.endIcon, classes["iconSize".concat(capitalize(size))])
    }, endIconProp);
    return /*#__PURE__*/React.createElement(ButtonBase, _extends({
        className: clsx(classes.root, classes[design], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(design).concat(capitalize(color))], size !== 'medium' && [classes["".concat(design, "Size").concat(capitalize(size))], classes["size".concat(capitalize(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
        component: component,
        disabled: disabled,
        focusRipple: !disableFocusRipple,
        focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
        ref: ref,
        type: type
    }, other), /*#__PURE__*/React.createElement("span", {
        className: classes.label
    }, startIcon, children, endIcon));
});
process.env.NODE_ENV !== "production" ? Button.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    component: PropTypes
    /* @typescript-to-proptypes-ignore */
    .elementType,
    disabled: PropTypes.bool,
    disableElevation: PropTypes.bool,
    disableFocusRipple: PropTypes.bool,
    disableRipple: PropTypes.bool,
    endIcon: PropTypes.node,
    focusVisibleClassName: PropTypes.string,
    fullWidth: PropTypes.bool,
    href: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    startIcon: PropTypes.node,
    type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string]),
    design: PropTypes.oneOf(['default', 'alternative', 'dark', 'light', 'green', 'purple', 'GDPurpleToBlue', 'socialFB'])
}: void 0;
export default withStyles(qdvstyles, {
    name: 'QdvButton'
})(Button);