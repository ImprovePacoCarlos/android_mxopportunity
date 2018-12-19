// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import Carrouselomponent from '../carrousel/CarrouselComponent';
import CardList from '../cards/CardList';

// create a component
class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }


  render() {
    const {
      categoria, articulos,
    } = this.props;
    const { visible } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titulo}>{categoria}</Text>
          {this.props.articulosDestacados && categoria === 'ULTIMO' ? <Carrouselomponent visible={visible} navigation={this.props.navigation} data={articulos.articulos} articulosDestacados={this.props.articulosDestacados} /> : null}
        </View>
        <CardList data={articulos.articulos} navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}


// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffff',
  },
  titulo: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#393251',
    width: '80%',
    borderRadius: 3,
    marginBottom: 3,
  },
  articulos: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },


});
export default CategoryPage;
