'use strict'

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    ListView,
    Easing,
    Image
} from 'react-native';
import Button from './component/Button';
import Improver from './../index';

export default class RedefineComponent extends Component{
    constructor(...props){
        super(...props);
        this._setDefaultProps();
        this._setBaseStyle();
        this._redefineRender();
    }
    componentWillUnmount() {
        this._redefineComponent();
        this._resetComponent();
    }
    
    
    _setBaseStyle(){
        Improver.setComponentBaseStyle(Text,{color:'red'})
    }
    _setDefaultProps(){
        Improver.setComponentDefaultProps(Text,{children:'Text的默认children属性被修改了'})
    }
    _redefineRender(){
        Improver.redefineComponentRender(View,function(original){
            if(original.props.change){
                return <Text>View组件的render函数被修改了</Text>
            }else{
                return original;
            }
        })
    }
    _redefineComponent(){

    }
    _resetComponent(){
        Improver.resetComponent(Text);
        Improver.resetComponent(View);
    }
    render(){
        return <View>
            <Text>可以给组件设置默认属性，基础样式，修改组件的render方法等来满足一些特性需求</Text>
            <Text></Text>
            <Text style = {{color:'blue'}}>新的属性</Text>
            <View change = {true}></View>
        </View>
    }
}