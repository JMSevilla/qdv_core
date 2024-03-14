import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CancelIcon from '../qdv/svg-icons/Cancel'
import withStyles from '../styles/withStyles';
import { emphasize, alpha } from '../styles/colorManipulator'
import useForkRef from '../utils/useForkRef';
import unsupportedProp from '../utils/unsupportedProp';
import capitalize from '../utils/capitalize';
import ButtonBase from '../ButtonBase'
import _extends from '@babel/runtime/helpers/esm/extends';

export var qdvstyles = function qdvstyles(theme) {
    var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
    var deleteIconColor = alpha(theme.palette.text.primary, 0.26);
    return {
        /* Styles applied to the root element. */
        root: {
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.pxToRem(13),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 32,
          color: theme.palette.getContrastText(backgroundColor),
          backgroundColor: backgroundColor,
          borderRadius: 32 / 2,
          whiteSpace: 'nowrap',
          transition: theme.transitions.create(['background-color', 'box-shadow']),
          // label will inherit this from root, then `clickable` class overrides this for both
          cursor: 'default',
          // We disable the focus ring for mouse, touch and keyboard users.
          outline: 0,
          textDecoration: 'none',
          border: 'none',
          // Remove `button` border
          padding: 0,
          // Remove `button` padding
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          '&$disabled': {
            opacity: 0.5,
            pointerEvents: 'none'
          },
          '& $avatar': {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
            fontSize: theme.typography.pxToRem(12)
          },
          '& $avatarColorPrimary': {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.dark
          },
          '& $avatarColorSecondary': {
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.dark
          },
          '& $avatarSmall': {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: theme.typography.pxToRem(10)
          }
        },
    
        /* Styles applied to the root element if `size="small"`. */
        sizeSmall: {
          height: 24
        },
    
        /* Styles applied to the root element if `color="primary"`. */
        colorPrimary: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText
        },
    
        /* Styles applied to the root element if `color="secondary"`. */
        colorSecondary: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText
        },
    
        /* Pseudo-class applied to the root element if `disabled={true}`. */
        disabled: {},
    
        /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
        clickable: {
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          cursor: 'pointer',
          '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.08)
          },
          '&:active': {
            boxShadow: theme.shadows[1]
          }
        },
    
        /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
        clickableColorPrimary: {
          '&:hover, &:focus': {
            backgroundColor: emphasize(theme.palette.primary.main, 0.08)
          }
        },
    
        /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
        clickableColorSecondary: {
          '&:hover, &:focus': {
            backgroundColor: emphasize(theme.palette.secondary.main, 0.08)
          }
        },
    
        /* Styles applied to the root element if `onDelete` is defined. */
        deletable: {
          '&:focus': {
            backgroundColor: emphasize(backgroundColor, 0.08)
          }
        },
    
        /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
        deletableColorPrimary: {
          '&:focus': {
            backgroundColor: emphasize(theme.palette.primary.main, 0.2)
          }
        },
    
        /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
        deletableColorSecondary: {
          '&:focus': {
            backgroundColor: emphasize(theme.palette.secondary.main, 0.2)
          }
        },
    
        /* Styles applied to the root element if `variant="outlined"`. */
        outlined: {
          backgroundColor: 'transparent',
          border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
          '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
            backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
          },
          '& $avatar': {
            marginLeft: 4
          },
          '& $avatarSmall': {
            marginLeft: 2
          },
          '& $icon': {
            marginLeft: 4
          },
          '& $iconSmall': {
            marginLeft: 2
          },
          '& $deleteIcon': {
            marginRight: 5
          },
          '& $deleteIconSmall': {
            marginRight: 3
          }
        },
    
        /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
        outlinedPrimary: {
          color: theme.palette.primary.main,
          border: "1px solid ".concat(theme.palette.primary.main),
          '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
            backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
          }
        },
    
        /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
        outlinedSecondary: {
          color: theme.palette.secondary.main,
          border: "1px solid ".concat(theme.palette.secondary.main),
          '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
            backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
          }
        },
        // TODO v5: remove
    
        /* Styles applied to the `avatar` element. */
        avatar: {},
    
        /* Styles applied to the `avatar` element if `size="small"`. */
        avatarSmall: {},
    
        /* Styles applied to the `avatar` element if `color="primary"`. */
        avatarColorPrimary: {},
    
        /* Styles applied to the `avatar` element if `color="secondary"`. */
        avatarColorSecondary: {},
    
        /* Styles applied to the `icon` element. */
        icon: {
          color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
          marginLeft: 5,
          marginRight: -6
        },
    
        /* Styles applied to the `icon` element if `size="small"`. */
        iconSmall: {
          width: 18,
          height: 18,
          marginLeft: 4,
          marginRight: -4
        },
    
        /* Styles applied to the `icon` element if `color="primary"`. */
        iconColorPrimary: {
          color: 'inherit'
        },
    
        /* Styles applied to the `icon` element if `color="secondary"`. */
        iconColorSecondary: {
          color: 'inherit'
        },
    
        /* Styles applied to the label `span` element. */
        label: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          paddingLeft: 12,
          paddingRight: 12,
          whiteSpace: 'nowrap'
        },
    
        /* Styles applied to the label `span` element if `size="small"`. */
        labelSmall: {
          paddingLeft: 8,
          paddingRight: 8
        },
    
        /* Styles applied to the `deleteIcon` element. */
        deleteIcon: {
          WebkitTapHighlightColor: 'transparent',
          color: deleteIconColor,
          height: 22,
          width: 22,
          cursor: 'pointer',
          margin: '0 5px 0 -6px',
          '&:hover': {
            color: alpha(deleteIconColor, 0.4)
          }
        },
    
        /* Styles applied to the `deleteIcon` element if `size="small"`. */
        deleteIconSmall: {
          height: 16,
          width: 16,
          marginRight: 4,
          marginLeft: -4
        },
    
        /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
        deleteIconColorPrimary: {
          color: alpha(theme.palette.primary.contrastText, 0.7),
          '&:hover, &:active': {
            color: theme.palette.primary.contrastText
          }
        },
    
        /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
        deleteIconColorSecondary: {
          color: alpha(theme.palette.secondary.contrastText, 0.7),
          '&:hover, &:active': {
            color: theme.palette.secondary.contrastText
          }
        },
    
        /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
        deleteIconOutlinedColorPrimary: {
          color: alpha(theme.palette.primary.main, 0.7),
          '&:hover, &:active': {
            color: theme.palette.primary.main
          }
        },
    
        /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
        deleteIconOutlinedColorSecondary: {
          color: alpha(theme.palette.secondary.main, 0.7),
          '&:hover, &:active': {
            color: theme.palette.secondary.main
          }
        }
      };
};

function isDeleteKeyboardEvent(keyboardEvent) {
    return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}

var Tag = /*#__PURE__*/React.forwardRef(function Tag(props, ref) {
    var avatarProp = props.avatar,
        classes = props.classes,
        className = props.className,
        clickableProp = props.clickable,
        _props$color = props.color,
        color = _props$color === void 0 ? 'default' : _props$color,
        ComponentProp = props.component,
        deleteIconProp = props.deleteIcon,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        iconProp = props.icon,
        label = props.label,
        onClick = props.onClick,
        onDelete = props.onDelete,
        onKeyDown = props.onKeyDown,
        onKeyUp = props.onKeyUp,
        _props$size = props.size,
        size = _props$size === void 0 ? 'medium' : _props$size,
        _props$design = props.design,
        design = _props$design === void 0 ? 'default' : _props$design,
        other = _objectWithoutProperties(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "design"]);

    var tagRef = React.useRef(null);
    var handleRef = useForkRef(tagRef, ref);

    var handleDeleteIconClick = function handleDeleteIconClick(event) {
        event.stopPropagation();

        if(onDelete) {
            onDelete(event);
        }
    };

    var handleKeyDown = function handleKeyDown(event) {
        if(event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
            event.preventDefault();
        }

        if(onKeyDown) {
            onKeyDown(event);
        }
    };

    var handleKeyUp = function handleKeyUp(event) {
        if(event.currentTarget === event.target) {
            if(onDelete && isDeleteKeyboardEvent(event)) {
                onDelete(event);
            } else if(event.key === 'Escape' && tagRef.current) {
                target.current.blur();
            }
        }

        if(onKeyUp) {
            onKeyUp(event);
        }
    };

    var clickable = clickableProp !== false && onClick ? true : clickableProp;
    var small = size === 'small';
    var Component = ComponentProp || (clickable ? ButtonBase : 'div');
    var moreProps = Component === ButtonBase ? {
        component: 'div'
    } : {};
    var deleteIcon = null;

    if(onDelete) {
        var customClasses = clsx(color !== 'default' && (design === 'default' ? classes["deleteIconColor".concat(capitalize(color))] : classes["deleteIconOutlinedColor".concat(capitalize(color))]), small && classes.deleteIconSmall);
        deleteIcon = deleteIconProp && /*#__PURE__*/React.isValidElement(deleteIconProp) ? /*#__PURE__*/React.cloneElement(deleteIconProp, {
            className: clsx(deleteIconProp.props.className, classes.deleteIcon, customClasses),
            onClick: handleDeleteIconClick
        }) : /*#__PURE__*/React.createElement(CancelIcon, {
            className: clsx(classes.deleteIcon, customClasses),
            onClick: handleDeleteIconClick
        });
    }

    var avatar = null;
    if(avatarProp && /*#__PURE__*/React.isValidElement(avatarProp)) {
        avatar = /*#__PURE__*/React.cloneElement(avatarProp, {
            className: clsx(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat(capitalize(color))])
        })
    }

    var icon = null;
    if(iconProp && /*#__PURE__*/React.isValidElement(iconProp)) {
        icon = /*#__PURE__*/React.cloneElement(iconProp, {
            className: clsx(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat(capitalize(color))])
        });
    }

    if(process.env.NODE_ENV !== "production") {
        if(avatar && icon) {
            console.error('Qodev-UI: The Tag component can not handle the avatar ' + 'and the icon prop at the same time. Pick one.');
        }
    }

    return /*#__PURE__*/React.createElement(Component, _extends({
        role: clickable || onDelete ? 'button' : undefined,
        className: clsx(classes.root, className, color !== 'default' && [classes["color".concat(capitalize(color))], clickable && classes["clickableColor".concat(capitalize(color))], onDelete && classes["deletableColor".concat(capitalize(color))], design !== 'default' && [classes.outlined, {
            'primary': classes.outlinedPrimary,
            'secondary': classes.outlinedSecondary
        }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable]),
        "aria-disabled": disabled ? true : undefined,
        tabIndex: clickable || onDelete ? 0 : undefined,
        onClick: onClick,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        ref: handleRef
    }, moreProps, other), avatar || icon, /*#__PURE__*/React.createElement("span", {
        className: clsx(classes.label, small && classes.labelSmall)
    }, label), deleteIcon);
});
process.env.NODE_ENV !== "production" ? Tag.propTypes = {
    avatar: PropTypes.element,
    children: unsupportedProp,
    classes: PropTypes.object,
    className: PropTypes.string,
    clickable: PropTypes.bool,
    color: PropTypes.oneOf(['default', 'primary', 'secondary']),
    component: PropTypes
    /* @typescript-to-proptypes-ignore */
    .elementType,
    deleteIcon: PropTypes.element,
    disabled: PropTypes.bool,
    icon: PropTypes.element,
    label: PropTypes.node,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    size: PropTypes.oneOf(['medium', 'small']),
    design: PropTypes.oneOf(['medium', 'small'])
} : void 0;
export default withStyles(qdvstyles, {
    name: 'QdvTag'
})(Tag);