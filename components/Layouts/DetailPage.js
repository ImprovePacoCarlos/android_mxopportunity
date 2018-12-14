// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking,
} from 'react-native';
//import Video from 'react-native-video';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderPage from '../header/HeaderPage';
import { actionGetArticuloSlug, actionGetArticulo } from '../../Store/Actions';

// create a component
class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      paused: false,
    };
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering,
    });
  }

  onLoad = () => {
    this.setState({
      loading: false,
    });
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  }

  handleUrl = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URI: ${url}`);
      }
    });
  };

  actionCallPublicidadUno=(llamada) => {
    switch (llamada.llamada_accion_uno) {
      case 'Llamar':
        return (
          <View style={styles.buttonStyleDos}>
            <Icon name="mobile-alt" size={20} color="#FFFFFF" />
            <Text style={styles.textStyle}>
              {llamada.url_llamada_uno}
            </Text>
          </View>
        );
      case 'Visitar':
        return (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => { this.handleUrl(llamada.url_llamada_uno); }}
          >
            <IconMaterial name="web" size={20} color="#FFFFFF" />
            <Text style={styles.textStyle}>Visitar</Text>
          </TouchableOpacity>
        );
      case 'Comprar':
        return (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => { this.handleUrl(llamada.url_llamada_uno); }}
          >
            <IconMaterial name="cash" size={20} color="#FFFFFF" />
            <Text style={styles.textStyle}>
              Comprar
            </Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  }

  actionCallPublicidadDos=(llamada) => {
    switch (llamada.llamada_accion_dos) {
      case 'Llamar':
        return (
          <View style={styles.buttonStyleDos}>
            <Icon name="mobile-alt" size={20} color="#FFFFFF" />
            <Text style={styles.textStyle}>
              {llamada.url_llamada_dos}
            </Text>
          </View>
        );
      case 'Visitar':
        return (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => { this.handleUrl(llamada.url_llamada_dos); }}
          >
            <Icon name="whatsapp" size={20} color="#FFFFFF" />
            <Text style={styles.textStyle}>
              Visitar
            </Text>
          </TouchableOpacity>

        );
      case 'Comprar':
        return (
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => { this.handleUrl(llamada.url_llamada_dos); }}
          >
            <Text style={styles.textStyle}>
              <Icon name="whatsapp" size={20} color="#FFFFFF" />
              Comprar
            </Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  }


  getArticuloSlug=() => {
    this.props.getSlug(this.props.navigation.state.params.slug);
    this.props.getArticulo();
  }

  render() {
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
                    width: 400, height: 300, resizeMode: 'contain',
                  }}

                />
              </View>
              <View>

                <Text style={styles.titulo}>{article.titulo}</Text>
                <Text style={styles.descripcion}>
                  {article.cuerpo_uno}
                </Text>
              </View>

              {
              article.imagen_destacada_dos
                ? (
                  <View style={styles.viewImage}>
                    <Image
                      source={{ uri: article.imagen_destacada_dos }}
                      style={{
                        width: 400, height: 300, resizeMode: 'contain',
                      }}
                    />
                    <Text style={styles.descripcion}>
                      {article.cuerpo_dos}
                    </Text>

                  </View>
                )
                : null
            }


              {
              article.video_tipo === 'sin video'
                ? (
                  <View style={styles.article_detail_urlvideo}>

                    {/* <Video
                      source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
                      style={styles.video}
                      resizeMode="contain"
                      onBuffer={this.onBuffer}
                      onLoad={this.onLoad}
                      paused={this.state.paused}
                    />
                  </View> */}
                )
                : null
            }

              <View style={styles.publicidad}>
                <View>
                  <Image
                    source={{ uri: article.imagen_llamada_uno }}
                    style={{
                      width: 170, height: 170, resizeMode: 'contain',
                    }}
                  />
                  {this.actionCallPublicidadUno(article)}
                </View>
                <View>
                  <Image
                    source={{ uri: article.imagen_llamada_dos }}
                    style={{
                      width: 170, height: 170, resizeMode: 'contain',
                    }}
                  />
                  {this.actionCallPublicidadUno(article)}
                </View>

              </View>


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
    fontFamily: 'Helvetica',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffff',
    marginBottom: 100,
  },
  titulo: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 20,
    letterSpacing: 2,
    padding: 5,
  },
  descripcion: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 28,
    fontWeight: 'normal',
    padding: 8,

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

  textStyle: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: 1,
    marginLeft: 4,


  },

  buttonStyle: {
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 130,
    left: 50,
    padding: 5,
    backgroundColor: '#222831',
  },
  buttonStyleDos: {
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 130,
    padding: 5,
    backgroundColor: '#222831',
  },
  article_detail_urlvideo: {

  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
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
