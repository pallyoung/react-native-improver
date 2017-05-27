'use strict'
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
export default class Button extends Component {
    constructor(...props) {
        super(...props);
    }
    render() {
        return <View style={styles.wrapper}>          
            <Text style = {styles.titleText}>{this.props.title}</Text>
            <TouchableHighlight
                onPress = {this.props.onBack}
                style = {styles.backIcon}>
                <Text style = {styles.backIconText}>Back</Text>
            </TouchableHighlight>
        </View>
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 44,
        backgroundColor: '#01539a',
        flexDirection: 'row'
    },
    backIcon:{
        height:44,
        width:80,
        position:'absolute',
        left:0,
        top:0,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    backIconText:{
        fontSize:12,
        color:'#FEFEFE'
    },
    titleText:{
        flex:1,
        fontSize:16,
        lineHeight:44,
        color:'#FFF',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    }
})