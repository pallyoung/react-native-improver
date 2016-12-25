'use strict'

import text from './text';
import image from './image';
import view from './view';
var baseStyle = {
    text:{},
}
function getRNComponentBaseStyleSheet(){
    return baseStyles;
}
function setRNComponentBaseStyleSheet(styles){
    baseStyles = Object.assign(baseStyles,styles);
}
export {
    getRNComponentBaseStyleSheet,
    setRNComponentBaseStyleSheet
}