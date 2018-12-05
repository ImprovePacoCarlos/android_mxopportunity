import React from 'react';
import {
  Image, StyleSheet, TouchableOpacity, View, Text,
} from 'react-native';


const CardComponent = props => (
  <TouchableOpacity onPress={() => { props.navigation.navigate('Detalle', { slug: props.slug }); }}>
    <View style={styles.card}>
      <View style={{ padding: 0 }}>
        <Image
          source={{ uri: props.imagen_destacada_uno }}
          style={{
            height: 120, width: 170, resizeMode: 'contain',
          }}
        />
      </View>
      <View style={styles.header_noticia}>
        <Text style={styles.titulo_articulo}>{props.titulo}</Text>
      </View>
    </View>
  </TouchableOpacity>

);
export default CardComponent;


const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    padding: 0,
    borderBottomRightRadius: 10,


  },
  header_noticia: {
    width: 170,
    color: '#f6f6f6',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#222831',
    padding: 8,

  },
  autor_foto: {
    marginRight: 10,
  },
  titulo_articulo: {
    color: '#f6f6f6',
    letterSpacing: 1,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },

});
