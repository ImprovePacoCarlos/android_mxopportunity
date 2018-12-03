import React from 'react';
import {
  Image, StyleSheet, TouchableOpacity, View, Text,
} from 'react-native';


const CardComponent = props => (
  <TouchableOpacity onPress={() => { props.navigation.navigate('Detalle', { slug: props.slug }); }}>
    <View style={styles.card}>
      <View>
        <Image
          source={{ uri: props.imagenportada }}
          style={{
            height: 125, width: 180, resizeMode: 'contain',
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
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,


  },
  header_noticia: {
    width: 180,
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
