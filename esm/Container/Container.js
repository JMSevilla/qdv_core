import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'
import withStyles from '../styles/withStyles';
import capitalize from '../utils/capitalize';

export var qdvstyles = function qdvstyles(theme) {
    return {
        root: _defineProperty({
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
        maxWidthXs: _defineProperty({}, theme.breakpoints.up('xs'), {
            maxWidth: Math.max(theme.breakpoints.values.xs, 444)
        }),
        maxWidthSm: _defineProperty({}, theme.breakpoints.up('sm'), {
            maxWidth: theme.breakpoints.values.sm
        }),
        maxWidthMd: _defineProperty({}, theme.breakpoints.up('md'), {
            maxWidth: theme.breakpoints.values.md
        }),
        maxWidthLg: _defineProperty({}, theme.breakpoints.up('lg'), {
            maxWidth: theme.breakpoints.values.lg
        }),
        maxWidthXl: _defineProperty({}, theme.breakpoints.up('xl'), {
            maxWidth: theme.breakpoints.values.xl
        })
    };
};
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
        other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);

    return /*#__PURE__*/React.createElement(Component, _extends({
        className: clsx(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes["maxWidth".concat(capitalize(String(maxWidth)))]),
        ref: ref
    }, other));
});
process.env.NODE_ENV !== "production" ? Container.propTypes = {
    children: PropTypes
    /* @typescript-to-proptypes-ignore */
    .node.isRequired,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes
    /* @typescript-to-proptypes-ignore */
    .elementType,
    disableGutters: PropTypes.bool,
    fixed: PropTypes.bool,
    maxWidth: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs', false])
} : void 0;
export default withStyles(qdvstyles, {
    name: 'QdvContainer'
})(Container);