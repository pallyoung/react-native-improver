'use strict'

import image from './image'
import text from './'
import textInput from './'
import view from './'



var _styleSheet = {
    text,
    image,
    view,
    textInput
}

function _assign(origin, source) {
    for (let p in source) {
        origin[p] = source[p];
    }
}

function getRNComponentBaseStyleSheet(componentName) {
    if (!_styleSheet[componentName]) {
        _styleSheet[componentName] = {};
    }
    return _styleSheet[componentName];
}
function setRNComponentBaseStyleSheet(styleSheet) {
    for (let style in styleSheet) {
        _styleSheet[style] = _styleSheet[style] || {};
        _assign(_styleSheet[style], styleSheet[style]);
    }

}
export {
    getRNComponentBaseStyleSheet,
    setRNComponentBaseStyleSheet
}