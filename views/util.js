'use strict'
import React from  'react';
function redefineComponentRender(component,render){

    component.prototype.render = (function(){
        let originalRender = component.prototype.render;
        return render(function(context){
            return originalRender.call(context);
        })
    })(component,render)
}
function setComponentBaseProps(component,props){
    redefineRender(component,function(originalRender){
        let originalComponent = originalRender(this);
        let props = Object.assign(props,originalComponent.props);
        return function(){
            React.cloneElement(
                originalRender(this),
                props
            )
        }
    });
}
function setComponentBaseStyle(component,style){
    redefineRender(component,function(originalRender){
        let originalComponent = originalRender(this);
        return function(){
            React.cloneElement(
                originalComponent,
                {style:[style,originalComponent.props.style]}
            )
        }
    })
}
function redefineComponent(component,config){
    if(config.render){
        redefineRender(component,config.render);
    }
    if(config.props){
        setBaseProps(component,config.props);
    }
    if(config.style){
       setBaseStyle(component,config.style); 
    }
    if(config.defaultProps){
        component.defaultProps = Object.assign(component.defaultProps,config.defaultProps);
    }
    if(config.propTypes){
        component.propTypes = Object.assign(component.propTypes,config.propTypes);
    }
}

export {
    redefineComponent,
    redefineComponentRender,
    setComponentBaseStyle,
    setComponentBaseStyle
}