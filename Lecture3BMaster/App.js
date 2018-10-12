import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, SafeAreaView } from 'react-native';
import ModalView from './App/Components/ModalView';
import MapComponent from './App/Components/MapComponent';
import VectorIcons from './App/Components/VectorIcons';
import WebComponent from './App/Components/WebComponent';

export default class App extends React.Component {

constructor(props) {
  super(props);
  this.state ={
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
