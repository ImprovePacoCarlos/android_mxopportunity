import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import { RutasPrincipales } from './RutasPrincipales';


const AppContainer = createAppContainer(RutasPrincipales);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <AppContainer />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000',
    marginTop: 30,
  },
});
