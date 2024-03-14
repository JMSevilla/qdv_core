import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import PropTypes from 'prop-types'
import clsx from 'clsx';
import { chainPropTypes } from '@qodev/utils'
import withStyles from '../styles/withStyles';

export var qdvstyles = function qdvstyles(theme) {
    var shadows = {};
    theme.shadows.forEach(function (shadow, index) {
        shadows["shadow".concat(index)] = {
            boxShadow: shadow
        }
    });
    return _extends({
        root: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            transition: theme.transitions.create('box-shadow')
        },
    }, shadows);
};

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
        other = _objectWithoutProperties(props, ["classes", "className", "component", "square", "shadow", "design"]);

    return /*#__PURE__*/React.createElement(Component, _extends({
        className: clsx(classes.root, className, design === 'outlined' ? classes.outlined : classes["shadow".concat(shadow)], !square && classes.rounded),
        ref: ref
    }, other));
});
process.env.NODE_ENV !== "production" ? Paper.propTypes = {
    children: PropTypes.object,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes
    /* @typescript-to-proptypes-ignore */
    .elementType,
    shadow: chainPropTypes(PropTypes.number, function (props) {
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
    square: PropTypes.bool,
    design: PropTypes.oneOf(['shadow', 'outlined'])
} : void 0;
export default withStyles(qdvstyles, {
    name: 'QdvPaper'
})(Paper);