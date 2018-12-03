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
          { categoria === 'Bienestar' ? <Carrouselomponent visible={visible} navigation={this.props.navigation} data={articulos.articulos} /> : null}
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
    fontSize: 20,
    paddingVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#252a34',
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
