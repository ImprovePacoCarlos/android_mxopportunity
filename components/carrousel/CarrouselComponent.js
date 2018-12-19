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
    };
  }

  // titulo, imagen_destacada_uno
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === (this.props.articulosDestacados.length - 1) ? 0 : this.state.position + 1,
        });
      }, 2000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }


  render() {
    // console.log(this.props.articulosDestacados);
    return (
      <View style={styles.container}>

        <ImageSliderz
          dataSource={this.props.articulosDestacados}
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
    backgroundColor: '#ffffff',
  },
});

// make this component available to the app
export default Carrouselomponent;
