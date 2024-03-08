"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _capitalize = _interopRequireDefault(require("../utils/capitalize"));

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `design="default2"`. */
    default2: theme.text.default2,

    /* Styles applied to the root element if `design="default1"`. */
    default1: theme.text.default1,

    /* Styles applied to the root element if `design="caption"`. */
    caption: theme.text.caption,

    /* Styles applied to the root element if `design="rock"`. */
    rock: theme.text.rock,

    /* Styles applied to the root element if `design="header1"`. */
    header1: theme.text.header1,

    /* Styles applied to the root element if `design="header2"`. */
    header2: theme.text.header2,

    /* Styles applied to the root element if `design="header3"`. */
    header3: theme.text.header3,

    /* Styles applied to the root element if `design="header4"`. */
    header4: theme.text.header4,

    /* Styles applied to the root element if `design="header5"`. */
    header5: theme.text.header5,

    /* Styles applied to the root element if `design="header6"`. */
    header6: theme.text.header6,

    /* Styles applied to the root element if `design="subtitle1"`. */
    subtitle1: theme.text.subtitle1,

    /* Styles applied to the root element if `design="subtitle2"`. */
    subtitle2: theme.text.subtitle2,

    /* Styles applied to the root element if `design="overline"`. */
    overline: theme.text.overline,

    /* Styles applied to the root element if `design="srOnly"`. Only accessible to screen readers. */
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

exports.styles = styles;
var defaultDesignMapping = {
  header1: 'header1',
  header2: 'header2',
  header3: 'header3',
  header4: 'header4',
  header5: 'header5',
  header6: 'header6',
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
      design = _props$design === void 0 ? 'default1' : _props$design,
      _props$designMapping = props.designMapping,
      designMapping = _props$designMapping === void 0 ? defaultDesignMapping : _props$designMapping,
      other = (0, _objectWithoutProperties2.default)(props, ["align", "classes", "className", "color", "component", "display", "spaceBottom", "noWrap", "paragraph", "design", "designMapping"]);
  var Component = component || (paragraph ? 'p' : designMapping[design] || defaultDesignMapping[design]) || 'span';
  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, design !== 'inherit' && classes[design], color !== 'initial' && classes["color".concat((0, _capitalize.default)(color))], noWrap && classes.noWrap, spaceBottom && classes.spaceBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat((0, _capitalize.default)(align))], display !== 'initial' && classes["display".concat((0, _capitalize.default)(display))]),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? Text.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: _propTypes.default.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the `variantMapping` prop.
   */
  component: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Controls the display type
   */
  display: _propTypes.default.oneOf(['initial', 'block', 'inline']),

  /**
   * If `true`, the text will have a bottom margin.
   */
  spaceBottom: _propTypes.default.bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: _propTypes.default.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: _propTypes.default.bool,

  design: _propTypes.default.oneOf(['header1', 'header2', 'header3', 'header4', 'header5', 'header6', 'subtitle1', 'subtitle2', 'default1', 'default2', 'caption', 'rock', 'overline', 'srOnly', 'inherit']),

  /**
   * The component maps the design prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  designMapping: _propTypes.default.object
} : void 0;

var _default = (0, _withStyles.default)(styles, {
  name: 'QdvText'
})(Text);

exports.default = _default;