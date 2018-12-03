// import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageSliderz from 'react-native-image-slideshow';


class Carrouselomponent extends Component {
  constructor() {
    super();
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          titulo: 'Entra para ver tres curiosidades de Gijón',
          imagen_destacada_uno: 'https://www.mxplanb.xyz/media/media/Salud.jpg',
          slug: 'la-salud-no-tiene-porque-ser-un-lugar-frio-e-inhospito',

        }, {
          titulo: 'ESTA ES UNA PREBA DEL FUNCINAMIENTO DEL TITULO',
          imagen_destacada_uno: 'https://www.mxplanb.xyz/media/media/huca_portada.jpg',
          slug: 'mexico-un-destino-competitivo-para-los-negocios',
        }, {
          titulo: 'Title 3',
          imagen_destacada_uno: 'https://www.mxplanb.xyz/media/media/huca_portada.jpg',
          slug: 'entra-para-ver-3-curiosidades-de-gijon',
        },
      ],
    };
  }

  // titulo, imagen_destacada_uno
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === (this.state.dataSource.length - 1) ? 0 : this.state.position + 1,
        });
      }, 2000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }


  render() {
    return (
      <View style={styles.container}>

        <ImageSliderz
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
          height={250}
          arrowSize={1}
          scrollEnabled
          navigation={this.props.navigation}


        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

// make this component available to the app
export default Carrouselomponent;
