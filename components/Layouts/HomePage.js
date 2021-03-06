// import liraries
import React, { Component } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import HeaderPage from '../header/HeaderPage';
import CategoryPage from './CategoryPage';
import {
  actionCargarPublicacionesStore,
  actionGetArticulosCategoria,
  actionGetArticulo,
  actionGetArticulosDestacados,
} from '../../Store/Actions';


// create a component
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.navigation.state.params ? this.props.get_categoria(this.props.navigation.state.params.categoria)
      : this.props.get_categoria('ULTIMO');
    this.props.get_articulos();
    this.props.get_articulos_destacados();
    this.props.get_articulo();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.homepage}>
        <HeaderPage {...this.props} />
        <CategoryPage {...this.props} categoria={navigation.state.params ? navigation.state.params.categoria : 'ULTIMO'} articulos={navigation.state.param ? navigation.state.params.articulos : this.props.articulos} articulosDestacados={this.props.articulos.articulosDestacados} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homepage: {

    zIndex: 0,
  },
});

const mapStateToProps = state => ({
  articulos: state.reducerArticulos,
});
const mapDispatchToProps = dispatch => ({
  get_categoria: (categoria) => {
    dispatch(actionGetArticulosCategoria(categoria));
  },
  get_articulos: () => {
    dispatch(actionCargarPublicacionesStore());
  },
  get_articulos_destacados: () => {
    dispatch(actionGetArticulosDestacados());
  },
  get_articulo: () => {
    dispatch(actionGetArticulo());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
