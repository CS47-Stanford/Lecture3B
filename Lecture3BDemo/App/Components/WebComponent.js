import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, SafeAreaView } from 'react-native';


export default class WebComponent extends React.Component {

constructor(props) {
  super(props);
  this.state ={

  }
}

webAction =async() => {
    WebBrowser.openBrowserAsync('https://google.com');
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
