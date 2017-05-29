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

import {Theme} from './../index'; 

import Button from './component/Button';

const theme1 = {
    color:'red',
    backgroundColor:'#ffeeff',
    fontSize:12
}
const theme2 = {
    color:'blue',
    backgroundColor:'#eeffff',
    fontSize:16
}

const styles = {

}

function createStyleSheet(){
    var theme = Theme.getTheme();
    styles = StyleSheet.create({
        wrapper:{
            flex:1,
            flexDirection:'column'
        },
        themeVision:{
            height:100,
            backgroundColor:theme.backgroundColor,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        },
        themeText:{
            color:theme.color,
            fontSize:theme.fontSize
        }

    })
}
export default class ThemeDemo extends Component{
    constructor(...props){
        super(...props);
        this.onThemeChange;
        this.state = {

        }
        this._changeTheme('theme1');
        createStyleSheet();

    }
    componentDidMount() {
        this.onThemeChange = ()=>{
            createStyleSheet();
            this.forceUpdate();
        }
        Theme.onchange(this.onThemeChange);
    }
    componentWillUnmount() {
        Theme.off(this.onThemeChange);
    }
    
    
    _changeTheme(theme){
        switch(theme){
            case 'theme1':
                this.state.theme = 'theme1';
                Theme.setTheme(theme1)
                break;
            case 'theme2':
                this.state.theme = 'theme2';
                Theme.setTheme(theme2)
                break;
        }
    }
    render(){
        return <View style = {styles.wrapper}>
                <View style = {styles.themeVision}>
                    <Text style = {styles.themeText}>当前主题：{this.state.theme}</Text>
                </View>
                <View 
                    >
                    <Button 
                        onPress = {()=>this._changeTheme('theme1')}
                        text = 'use theme 1'/>
                    <Button 
                        onPress = {()=>this._changeTheme('theme2')}
                        text = 'use theme 2'/>
                </View>
        </View>
    }
}
