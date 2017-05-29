'use strict'
import React from 'react';
function redefineComponentRender(component, renderDefiner) {
    let originalRender = component.prototype._originalRender || component.prototype.render;
    component.prototype._originalRender = originalRender;
    component.prototype.render = function () {
        return renderDefiner(this._originalRender());
    };
}
function setComponentDefaultProps(component, props) {
    Object.assign(component.defaultProps,props);
    // redefineComponentRender(component, function (originalComponent) {
    //     props = Object.assign(props, originalComponent.props);
    //     return React.cloneElement(
    //         originalRender(this),
    //         props
    //     )
    // });
}
function setComponentBaseStyle(component, style) {
    redefineComponentRender(component, function (originalComponent) {
        let props = Object.assign({}, originalComponent.props || {}, { style: [style, originalComponent.props.style || {}] });
        return React.cloneElement(
            originalComponent,
            props
        )
    })
}
function redefineComponent(component, config) {
    if (config.renderDefiner) {
        redefineComponentRender(component, config.renderDefiner);
    }
    if (config.props) {
        setComponentBaseProps(component, config.props);
    }
    if (config.style) {
        setComponentBaseStyle(component, config.style);
    }
    if (config.defaultProps) {
        component.defaultProps = Object.assign(component.defaultProps, config.defaultProps);
    }
    if (config.propTypes) {
        component.propTypes = Object.assign(component.propTypes, config.propTypes);
    }
}

export {
    redefineComponent,
    redefineComponentRender,
    setComponentBaseStyle,
    setComponentDefaultProps
}