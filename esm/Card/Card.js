import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Paper from "../Paper";
import withStyles from "../styles/withStyles";
export var qdvstyles = {
    root: {
        overflow: 'hidden',
        padding: 16,
        '&:last-child' : {
            paddingBottom: 24
        }
    }
};
var Card = /*#__PURE__*/React.forwardRef(function Card(props, ref) {
    var classes = props.classes,
        className = props.className,
        _props$raised = props.raised,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        raised = _props$raised === void 0 ? false : _props$raised,
        other = _objectWithoutProperties(props, ["classes", "className", "raised", "component"]);

    var PaperComponent = /*#__PURE__*/React.createElement(Paper, _extends({
        className: clsx(classes.root, className),
        shadow: raised ? 8 : 1,
        ref: ref
    }, other));

    return /*#__PURE__*/React.createElement(Component, _extends({
        className: clsx(classes.root, className),
        ref: ref
    }), PaperComponent)
});
process.env.NODE_ENV !== "production" ? Card.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    raised: PropTypes.bool,
    component: PropTypes
    /* @typescript-to-proptypes-ignore */
    .elementType
} : void 0;
export default withStyles(qdvstyles, {
    name: 'QdvCard'
})(Card);