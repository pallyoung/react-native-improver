'use strict'
import { Dimensions, PixelRatio } from 'react-native';
var WIDTH_DP = 375;
var WIDTH_PX = 750;
const PIXEL_RATIO = 2;
const REAL_PIXEL_RATIO = PixelRatio.get();
const REAL_WIDTH_DP = Dimensions.get('window').width;
const RATIO = REAL_WIDTH_DP / WIDTH_DP;
function getPointIndex(n) {
    let ns = n.toString();
    let pointIndex = ns.indexOf('.') + 1;
    return pointIndex ? ns.length - pointIndex : pointIndex;
}
function add(a = 0, b = 0) {
    let pointIndex = Math.max(getPointIndex(a), getPointIndex(b));
    let times = pointIndex && Math.pow(10, pointIndex) || 1;
    a = a * times;
    b = b * times;
    return (a + b) / times
}
function minus(a = 0, b = 0) {
    let pointIndex = Math.max(getPointIndex(a), getPointIndex(b));
    let times = pointIndex && Math.pow(10, pointIndex) || 1;
    a = a * times;
    b = b * times;
    return (a - b) / times
}
function times(a, b) {
    let pointIndex = Math.max(getPointIndex(a), getPointIndex(b));
    let times = pointIndex && Math.pow(10, pointIndex) || 1;
    a = a * times;
    b = b * times;
    return a * b / (times * times);
}
function divided(a, b) {
    let pointIndex = Math.max(getPointIndex(a), getPointIndex(b));
    let times = pointIndex && Math.pow(10, pointIndex) || 1;
    a = a * times;
    b = b * times;
    return a / b;
}
function px2dp(px) {
    return PixelRatio.roundToNearestPixel(px / REAL_PIXEL_RATIO);
}
function dp2px(dp) {
    return PixelRatio.getPixelSizeForLayoutSize(dp);
}
function autoSize(dp) {
    return PixelRatio.roundToNearestPixel(dp * RATIO);
}
function setDeviceWidth(width) {
    WIDTH_DP = width;
    WIDTH_PX = width * REAL_PIXEL_RATIO;
    RATIO = REAL_WIDTH_DP / WIDTH_DP;
}
export {
    px2dp,
    dp2px,
    autoSize
}