/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Entry from './demo/index';
export default class demo extends Component {
  render() {
    return  <Entry />;;
  }
}

AppRegistry.registerComponent('demo', () => demo);
