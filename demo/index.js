'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

var {
    height,
    width
} = Dimensions.get('window');

import Button from './component/Button';
import Improver from './../index';
export default class Entry extends React.Component{
    constructor(...props){
        super(...props);
    }
    render(){
        return <View style = {styles.wrapper}>
                <Button text = {height+':'+width}/>
                <Text>{Improver.autoSize(0.3)}</Text>
            </View>;
    }
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
}) 