'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Button extends Component{
    constructor(...props){
        super(...props);
    }
    render(){
        return <TouchableHighlight
                onPress = {this.props.onPress} 
                style = {styles.wrapper}>
                <Text>{this.props.text}</Text>
        </TouchableHighlight>
    }
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        height:44,
        width:220,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#222'
    },
}) 