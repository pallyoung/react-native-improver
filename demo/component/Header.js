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
        this.state = {
            title:this.props.title
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.title!==this.props.title){
            this.state.title = this.props.title;
        }
    }
    
    setTitle(title){
        this.setState({title})
    }
    render() {
        return <View style={styles.wrapper}>          
            <Text style = {styles.titleText}>{this.state.title}</Text>
            <TouchableHighlight
                onPress = {this.props.onBack}
                underlayColor = 'transparent'
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