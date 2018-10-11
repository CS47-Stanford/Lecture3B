import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import  Modal from 'react-native-modal';
import  Metrics from '../../Themes/Metrics.js';
import { WebBrowser, MapView, Location, Permissions } from 'expo';



export default class MapComponent extends React.Component {

constructor(props) {
  super(props);
  this.state ={

  }
  console.log(JSON.stringify(props));
}


  render() {

    return (
      <View style={styles.container}>

      </View>
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
