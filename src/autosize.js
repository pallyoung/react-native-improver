'use strict'
var { Dimensions, PixelRatio } = require('react-native');
var WIDTH_DP = 375;
var WIDTH_PX = 750;
const PIXEL_RATIO = 2;
const REAL_PIXEL_RATIO = PixelRatio.get();
const REAL_WIDTH_DP = Dimensions.get('window').width;
const RATIO = REAL_WIDTH_DP / WIDTH_DP;

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
module.exports =  {
    px2dp,
    dp2px,
    autoSize,
    setDeviceWidth
}