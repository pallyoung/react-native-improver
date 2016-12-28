'use strict'
import ReactNative from 'react-native';
import {setRNComponentBaseStyleSheet,getRNComponentBaseStyleSheet} from './style';
import {
    redefineComponent,
    redefineComponentRender,
    setComponentBaseProps,
    setComponentBaseStyle
} from './util';
import {
    px2dp,
    dp2px,
    autoSize
} from './autosize';
//let TabBarIOSItem = TabBarIOS.Item;

let keys = [
    'ActivityIndicator',
    'ActivityIndicatorIOS',
    'DatePickerIOS',
    'DrawerLayoutAndroid',
    'Image',
    'KeyboardAvoidingView',
    'ListView',
    'MapView',
    'Modal',
    'Navigator',
    'NavigatorIOS',
    'Picker',
    'PickerIOS',
    'ProgressBarAndroid',
    'ProgressViewIOS',
    'RefreshControl',
    'ScrollView',
    'SegmentedControlIOS',
    'Slider',
    'SliderIOS',
    'StatusBar',
    'SnapshotViewIOS',
    'Switch',
    'SwitchAndroid',
    'SwitchIOS',
    'TabBarIOS',
    'Text',
    'TextInput',
    'ToolbarAndroid',
    'TouchableHighlight',
    'TouchableNativeFeedback',
    'TouchableOpacity',
    'TouchableWithoutFeedback',
    'View',
    'ViewPagerAndroid',
    'WebView'
];
keys.forEach(function(item){
    ReactNative[item]&&setComponentBaseStyle(ReactNative[item],getRNComponentBaseStyleSheet(item));
});
export {
    setRNComponentBaseStyleSheet,
    redefineComponent,
    redefineComponentRender,
    setComponentBaseProps,
    setComponentBaseStyle,
    px2dp,
    dp2px,
    autoSize
}