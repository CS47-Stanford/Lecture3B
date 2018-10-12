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
    checked: false,
    mapVisible: false,
    mapRegion: null,
  }
  console.log("props map " + JSON.stringify(props));
}


componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  }

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });

   // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
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
        onPress={() => this.setState({mapVisible: true})}
      />
      {this.state.mapVisible && (
      <MapView
        style={{ height: Metrics.screenHeight, width: Metrics.screenWidth }}
        region={this.state.mapRegion}
        onRegionChange={this._handleMapRegionChange}
      />
    )}
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
