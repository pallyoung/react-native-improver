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
    Easing
} from 'react-native';

export default class Content extends Component{
    constructor(...props){
        super(...props);
        this.state = {
            children:null
        }
    }
    setChildren(children){
        this.setState({children})
    }
    _renderChilren(){
        return this.state.children
    }
    render(){
        return <View style = {this.props.style}>
                {this._renderChilren()}
            </View>
    }
}