import { AppRegistry, View, StyleSheet } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import store from './Store/Store';

const RNRedux = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <App />
    </View>

  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

AppRegistry.registerComponent(appName, () => RNRedux);
