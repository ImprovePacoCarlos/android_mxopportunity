import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';


class ShareComponentApp extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

   share= (social) => {
     Share.shareSingle({
       title: 'MXPLanB',
       message: 'Visita nuestro sitio web',
       url: 'www.planb.com.mx',
       social,
     });
   }


   render() {
     return (
       <View style={styles.container}>
         <TouchableOpacity
           onPress={() => {
             setTimeout(() => {
               this.share('facebook');
             }, 300);
           }}
           style={styles.sharemedia}
         >
           <Icon name="facebook-square" size={30} color="#222831" />
           <Text style={styles.textShare}>Facebook</Text>
         </TouchableOpacity>


         <TouchableOpacity
           onPress={() => {
             setTimeout(() => {
               this.share('whatsapp');
             }, 300);
           }}
           style={styles.sharemedia}
         >
           <Icon name="whatsapp" size={30} color="#222831" />
           <Text style={styles.textShare}>WhatsApp</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={() => {
             setTimeout(() => {
               this.share('email');
             }, 300);
           }}
           style={styles.sharemedia}
         >
           <IconEmail name="email" size={30} color="#222831" />
           <Text style={styles.textShare}>Correo</Text>

         </TouchableOpacity>

         <TouchableOpacity
           onPress={() => {
             setTimeout(() => {
               this.share('twitter');
             }, 300);
           }}
           style={styles.sharemedia}
         >
           <Icon name="twitter-square" size={30} color="#222831" />
           <Text style={styles.textShare}>Twitter</Text>
         </TouchableOpacity>
       </View>
     );
   }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#ffff',
    zIndex: 1,
    position: 'absolute',
    right: 0,
    top: 50,
    width: 150,
    paddingVertical: 20,
    paddingHorizontal: 10,

  },
  sharemedia: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textShare: {
    marginLeft: 10,
    fontSize: 14,
    letterSpacing: 2,
  },
});

// make this component available to the app
export default ShareComponentApp;
