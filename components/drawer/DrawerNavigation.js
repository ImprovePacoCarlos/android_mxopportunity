
// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  actionCargarPublicacionesStore,
  actionGetArticulosCategoria,
  actionGetEmpresa,
  actionGetEmpresaInfo,
  actionGetCategoriasEmpresa,
} from '../../Store/Actions';


const EMPRESA = 'PLANB';
// create a component
class DrawerNavigation extends Component {
  componentWillMount() {
    this.props.get_empresa(EMPRESA);
    this.props.get_empresa_info();
    this.props.get_empresa_categorias();
    this.props.get_articulos();
  }


  navigateToScreen = (route, datos) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: datos,
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    this.props.get_categoria(datos.categoria);
  }


  render() {
    const { categorias, articulos } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {categorias.categorias_empresa && categorias.categorias_empresa.length > 0
            ? categorias.categorias_empresa.map((c, key) => (
              <TouchableHighlight key={key} underlayColor="#eeeeee" onPress={this.navigateToScreen('Home', { categoria: c.nombre_categoria, articulos })}>
                <View style={styles.navSectionStyle}>
                  <Icon name="chevron-right" size={14} color="#393251" />
                  <Text style={styles.labelStyle}>
                    {c.nombre_categoria}
                  </Text>
                </View>

              </TouchableHighlight>
            ))
            : (
              <TouchableHighlight underlayColor="#eeeeee" onPress={this.navigateToScreen('Home', { categoria: 'ULTIMO' })}>
                <View style={styles.navSectionStyle}>
                  <Text style={styles.labelStyle}>
                  LO ULTIMO
                  </Text>
                </View>
              </TouchableHighlight>

            )
      }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  navSectionStyle: {
    opacity: 1,
    borderBottomWidth: 1,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    opacity: 1,
    letterSpacing: 2,
    fontSize: 14,
    color: '#393251',
    fontFamily: 'Helvetica',
    marginLeft: 10,


  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

});
const mapStateToProps = state => ({
  articulos: state.reducerArticulos,
  categorias: state.reducerEmpresa,
});

const mapDispatchToProps = dispatch => ({
  get_categoria: (categoria) => {
    dispatch(actionGetArticulosCategoria(categoria));
  },
  get_articulos: () => {
    dispatch(actionCargarPublicacionesStore());
  },
  get_empresa: (varEmpresa) => {
    dispatch(actionGetEmpresa(varEmpresa));
  },
  get_empresa_info: () => {
    dispatch(actionGetEmpresaInfo());
  },
  get_empresa_categorias: () => {
    dispatch(actionGetCategoriasEmpresa());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigation);
