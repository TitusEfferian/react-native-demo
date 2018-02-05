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
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
const App = () => (
    <View>
      <Header headerText={'React-native'} />
      <AlbumList/>
    </View>




);

AppRegistry.registerComponent('albums', () => App);