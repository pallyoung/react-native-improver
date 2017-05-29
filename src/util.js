'use strict'
var React = require('react');
function redefineComponentRender(component, renderDefiner) {
    let originalRender = component.prototype._originalRender || component.prototype.render;
    component.prototype._originalRender = originalRender;
    component.prototype.render = function () {
        return renderDefiner(this._originalRender());
    };
}
function resetComponentRender(component){
    component.prototype.render = component.prototype._originalRender||component.prototype.render;
    delete component.prototype._originalRender;
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
function setComponentBaseStyle(component, style) {
    redefineComponentRender(component, function (originalComponent) {
        let props = Object.assign({}, originalComponent.props || {}, { style: [style, originalComponent.props.style || {}] });
        return React.cloneElement(
            originalComponent,
            props
        )
    })
}
function setComponentDefaultProps(component,defaultProps){
    if(!component._defaultProps){
        component._defaultProps = component.defaultProps;
    }
    component.defaultProps = Object.assign({},component._defaultProps,defaultProps);
}
function resetComponentDefaultProps(component){
    if(component._defaultProps){
        component.defaultProps = component._defaultProps;
        delete component._defaultProps;
    }
}
function redefineComponent(component, config) {
    if (config.renderDefiner) {
        redefineComponentRender(component, config.renderDefiner);
    }
    if (config.props) {
        setComponentDefaultProps(component, config.props);
    }
    if (config.style) {
        setComponentBaseStyle(component, config.style);
    }
}

function resetComponent(component){
    resetComponentRender(component);
    resetComponentDefaultProps(component);
}
module.exports = {
    redefineComponent,
    redefineComponentRender,
    setComponentBaseStyle,
    setComponentDefaultProps,
    resetComponentRender,
    resetComponent,
    resetComponentDefaultProps
}