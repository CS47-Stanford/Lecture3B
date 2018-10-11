import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, SafeAreaView } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import  Modal from 'react-native-modal';
import Metrics from './Themes/Metrics';
import { WebBrowser, MapView, Location, Permissions } from 'expo';
import ModalView from './App/Components/ModalView';
import MapComponent from './App/Components/MapComponent';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import VectorIcons from './App/Components/VectorIcons';
import WebComponent from './App/Components/WebComponent';

export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state ={
    checked: false,
    isModalVisible: false,
    isWebModalVisible: false,
    googleSearch: '',
    randomThings: [],
    mapRegion: null,
    text: '',
    showMap: false,
  }
}


  render() {
    return (
      <SafeAreaView style={styles.container}>
          <VectorIcons/>
          <ModalView/>
          <WebComponent/>
          <MapComponent/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
