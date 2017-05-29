'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PixelRatio
} from 'react-native';

export default class Button extends Component{
    constructor(...props){
        super(...props);
    }
    render(){
        return <TouchableHighlight
                onPress = {this.props.onPress} 
                activeOpacity ={1}
                underlayColor = '#e76c80'
                style = {styles.wrapper}>
                <Text style ={{color:'#222',}}>{this.props.text}</Text>
        </TouchableHighlight>
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        height:44,
        justifyContent:'flex-start',
        paddingLeft:44,
        alignItems:'center',
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#e76c80'
    },
}) 