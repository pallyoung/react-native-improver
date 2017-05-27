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
import Improver from './../index';

var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
export default class Entry extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            height: 0,
            width: 0,
            views:[1,2,4],
            translateX:new Animated.Value(0)
        }
    }
    push() {
        Animated.timing(
            this.state.translateX,
            {
                duration:500,
                easing:Easing.ease,
                toValue:-this.state.width
            }).start()
    }
    pop() {
        Animated.timing(
            this.state.translateX,
            {
                duration:500,
                easing:Easing.ease,
                toValue:0
            }).start()
    }
    _renderItem(item,id,sid){
        return  <Button 
                    onPress = {()=>this.push()}
                    text='autosize' />
    }
    render() {
        return <View style={styles.wrapper}>
            <Header 
                onBack = {()=>this.pop()}
                title='DEMO'></Header>
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
                        transform:[{translateX:this.state.translateX}]
                    }}>
                    <ListView 
                        style = {styles.child}
                        renderRow = {(...args)=>this._renderItem(...args)}
                        dataSource = {ds.cloneWithRows(this.state.views)}
                        />
                    <View
                        style = {styles.child}></View>
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