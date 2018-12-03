// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import CardComponent from './CardComponent';


const CardList = props => (
  <View style={styles.articulos}>
    {props.data && props.data.length > 0
      ? props.data.map((c, key) => (
        <CardComponent key={key} {...c} navigation={props.navigation} />
      ))
      : (
        <View style={styles.refreshContainer}>
          <Image style={styles.reload} source={require('../../assets/images/refresh.gif')} />
          <Text>Cargando....</Text>
        </View>
      )
     }

  </View>
);
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  articulos: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginVertical: 50,

  },
  refreshContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  reload: {
    height: 30,
    width: 30,
  },
});

// make this component available to the app
export default CardList;
