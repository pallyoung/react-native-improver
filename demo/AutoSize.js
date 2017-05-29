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

export default class AutoSize extends Component{
    constructor(...props){
        super(...props);
    }
    render(){
        return <View>
            <Text>autosize demo</Text>
        </View>
    }
}