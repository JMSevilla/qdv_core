import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import capitalize from '../utils/capitalize';
export var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `variant="body2"`. */
    default2: theme.text.default2,

    /* Styles applied to the root element if `variant="body1"`. */
    default1: theme.text.default1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.text.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.text.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.text.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.text.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.text.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.text.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.text.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.text.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.text.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.text.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.text.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `spaceBottom={true}`. */
    spaceBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },

    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultDesignMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  default1: 'p',
  default2: 'p'
};
var Text = /*#__PURE__*/React.forwardRef(function Text(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$spaceBottom = props.spaceBottom,
      spaceBottom = _props$spaceBottom === void 0 ? false : _props$spaceBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$design = props.design,
      design = _props$design === void 0 ? 'body1' : _props$design,
      _props$designMapping = props.designMapping,
      designMapping = _props$designMapping === void 0 ? defaultDesignMapping : _props$designMapping,
      other = _objectWithoutProperties(props, ["align", "classes", "className", "color", "component", "display", "spaceBottom", "noWrap", "paragraph", "design", "designMapping"]);

  var Component = component || (paragraph ? 'p' : designMapping[design] || defaultDesignMapping[variant]) || 'span';
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: clsx(classes.root, className, design !== 'inherit' && classes[design], color !== 'initial' && classes["color".concat(capitalize(color))], noWrap && classes.noWrap, spaceBottom && classes.spaceBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat(capitalize(align))], display !== 'initial' && classes["display".concat(capitalize(display))]),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? Text.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the `designMapping` prop.
   */
  component: PropTypes
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Controls the display type
   */
  display: PropTypes.oneOf(['initial', 'block', 'inline']),

  /**
   * If `true`, the text will have a bottom margin.
   */
  spaceBottom: PropTypes.bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: PropTypes.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,

  /**
   * Applies the theme text styles.
   */
  design: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'default1', 'default2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),

  /**
   * The component maps the design prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  designMapping: PropTypes.object
} : void 0;
export default withStyles(styles, {
  name: 'QdvText'
})(Text);