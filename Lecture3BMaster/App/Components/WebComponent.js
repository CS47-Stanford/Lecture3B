import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, SafeAreaView } from 'react-native';
import  Metrics from '../../Themes/Metrics.js';
import { WebBrowser, MapView, Location, Permissions } from 'expo';
import { Card, CheckBox } from 'react-native-elements';

export default class WebComponent extends React.Component {

constructor(props) {
  super(props);
  this.state ={
    checked: false,
    mapRegion: null,
  }
}

webAction =async() => {
    WebBrowser.openBrowserAsync('https://google.com');
}

  render() {
    return (
      <View style={styles.container}>
          <CheckBox
            center
            title='Click Here'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => this.webAction()}
          />
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
