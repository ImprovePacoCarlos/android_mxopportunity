// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';
import HeaderPage from '../header/HeaderPage';
import { actionGetArticuloSlug, actionGetArticulo } from '../../Store/Actions';
import CardList from '../cards/CardList';
// create a component
class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  // componentDidMount() {
  //   this.props.getSlug(this.props.navigation.state.params.slug);
  //   this.props.getArticulo();
  // }

  getArticuloSlug=() => {
    this.props.getSlug(this.props.navigation.state.params.slug);
    this.props.getArticulo();
  }

  render() {
    const { data } = this.state;
    const article = this.props.articulo.articulo;
    console.log(this.props.articulo);
    return (
      <View style={styles.detailPage}>
        <NavigationEvents
          onWillFocus={() => { this.getArticuloSlug(); }}
        />
        <HeaderPage {...this.props} data={article} />
        {article
          ? (

            <ScrollView style={styles.container}>

              <View style={styles.viewImage}>
                <Image
                  source={{ uri: article.imagen_destacada_uno }}
                  style={{
                    width: 400, height: 400, resizeMode: 'contain',
                  }}
                />
              </View>
              <View>

                <Text style={styles.titulo}>{article.titulo}</Text>
                <Text style={styles.descripcion}>
                  {article.cuerpo_uno}
                </Text>
              </View>

              <View style={styles.viewImage}>
                <Image
                  source={{ uri: article.imagen_destacada_dos }}
                  style={{
                    width: 400, height: 400, resizeMode: 'contain',
                  }}
                />
                <Text style={styles.descripcion}>
                  {article.cuerpo_dos}
                </Text>

              </View>

              <View style={styles.publicidad}>
                <Image source={{ uri: article.imagen_llamada_uno }} style={{ width: 170, height: 170, resizeMode: 'contain' }} />
                <Image source={{ uri: article.imagen_llamada_dos }} style={{ width: 170, height: 170, resizeMode: 'contain' }} />
              </View>
              <Text>
                {this.props.articulo.categoria}
              </Text>

            </ScrollView>
          ) : (
            <View style={styles.refreshContainer}>
              <Image style={styles.reload} source={require('../../assets/images/refresh.gif')} />
              <Text>Cargando....</Text>
            </View>
          )
     }


      </View>

    );
  }
}

// define your styles
const styles = StyleSheet.create({
  detailPage: {
    zIndex: 0,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffff',
    marginBottom: 100,


  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    padding: 5,
  },
  descripcion: {
    fontSize: 14,
    letterSpacing: 1,
    lineHeight: 20,
    fontWeight: 'normal',
    padding: 5,
  },
  publicidad: {
    marginVertical: 20,
    marginBottom: 20,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

  },
  viewImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  refreshContainer: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reload: {
    height: 30,
    width: 30,
  },
});


const mapStateToProps = state => ({
  articulo: state.reducerArticulos,
});
const mapDispatchToProps = dispatch => ({
  getSlug: (slug) => {
    dispatch(actionGetArticuloSlug(slug));
  },
  getArticulo: () => {
    dispatch(actionGetArticulo());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
