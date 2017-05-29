'use strict'

import BaseTheme from './BaseTheme';

var currentTheme = BaseTheme;

var CHANGE_LISTENERS = [];


function setTheme(theme) {
    currentTheme = theme;
    fireChange();
}
function getTheme() {
    return currentTheme;
}


function fireChange() {
    CHANGE_LISTENERS.forEach(function (listener) {
        listener.call(null);
    });
}
var Theme = {
    getTheme,
    setTheme,
    onchange: function (listener) {
        if (typeof listener != 'function') {
            throw new Error('argument is not a true listener');
        }
        CHANGE_LISTENERS.push(listener);
    },
    off: function (listener) {
        var temp = [];
        CHANGE_LISTENERS.forEach(function (l) {
            if (l != listener) {
                temp.push(l);
            }
        });
        CHANGE_LISTENERS = temp;
    }
}

module.exports = Theme;