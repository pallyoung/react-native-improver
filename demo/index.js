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

var {
    height,
    width
} = Dimensions.get('window');

import Button from './component/Button';
import Header from './component/Header';
import Content from './component/Content';
import Improver from './../index';

import AutoSizeDemo from './AutoSize';
import ThemeDemo from './Theme';

import RedefineComponentDemo from './RedefineComponent';
var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});

const routeMap = [
    {
        title:'AUTOSIZE DEMO',
        component:AutoSizeDemo
    },
    {
        title:'Theme DEMO',
        component:ThemeDemo
    },
     {
        title:'RedefineComponent DEMO',
        component:RedefineComponentDemo
    }
]
export default class Entry extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            title:'',
            height: 0,
            width: 0,
            currentView:'',
            views:routeMap,
            translateX:new Animated.Value(0)
        }
    }
    push(route) {
        Animated.timing(
            this.state.translateX,
            {
                duration:300,
                easing:Easing.ease,
                toValue:-this.state.width
            }).start(()=>{
                this.refs.header.setTitle(route.title);
                let View = route.component;
                this.refs.content.setChildren(<View />);
            })
    }
    pop() {
        Animated.timing(
            this.state.translateX,
            {
                duration:300,
                easing:Easing.ease,
                toValue:0
            }).start(()=>{
                this.refs.content.setChildren(null);
                this.refs.header.setTitle('DEMO');
            })
    }
    _renderItem(item,id,sid){
        return  <Button 
                    onPress = {()=>this.push(item)}
                    text={item.title} />
    }
    render() {
        return <View style={styles.wrapper}>
            <Header 
                ref = 'header'
                onBack = {()=>this.pop()}
                title='DEMO' />
            <View
                style={styles.content}
                onLayout={(e) => {
                    var { height, width } = e.nativeEvent.layout;
                    if (height !== this.state.height || width !== this.state.width) {
                        this.setState({ height, width });
                    }
                }}
            >
                <Animated.View
                    style={{
                        height: this.state.height,
                        width: this.state.width*2,
                        flexDirection:'row',
                        transform:[{translateX:this.state.translateX}]
                    }}>
                    <ListView 
                        style = {styles.child}
                        contentContainerStyle = {{
                            flexDirection: 'column',
                        }}
                        renderRow = {(...args)=>this._renderItem(...args)}
                        dataSource = {ds.cloneWithRows(this.state.views)}
                        />
                    <Content
                        ref = 'content'
                        style = {styles.child} />
                </Animated.View>
            </View>
        </View>;
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    child: {
        flex:1,
        flexDirection: 'column',
    }
}) 