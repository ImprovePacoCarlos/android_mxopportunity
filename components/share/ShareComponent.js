import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';

const FBSDK = require('react-native-fbsdk');


const { ShareDialog } = FBSDK;

class ShareComponent extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      title: 'React Native',
      message: 'Hola mundo',
      url: 'www.planb.com.mx',
      social: null,
    };

    const CompartirFace = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
      contentDescription: 'Wow, check out this great site!',
    };


    this.state = { shareLinkContent, CompartirFace };
  }


   share= (social) => {
     Share.shareSingle({
       title: 'React Native',
       message: 'Hola mundo',
       url: 'www.planb.com.mx',
       social,
     });
   }

   shareLinkWithShareDialog() {
     const tmp = this;
     ShareDialog.canShow(this.state.CompartirFace)
       .then((canShow) => {
         if (canShow) {
           return ShareDialog.show(tmp.state.CompartirFace);
         }
       })
       .then(
         (result) => {
           if (result.isCancelled) {
             console.log('Share cancelled');
           } else {
             console.log('Share success');
           }
         },
         (error) => {
           console.log(`error: ${error}`);
         },
       );
   }


   render() {
     return (
       <View style={styles.container}>


         <TouchableOpacity
           onPress={this.shareLinkWithShareDialog.bind(this)}
           style={styles.sharemedia}
         >
           <Icon name="facebook-square" size={30} color="#222831" />
           <Text style={styles.textShare}>Facebook</Text>
         </TouchableOpacity>


         <TouchableOpacity
           onPress={this.shareLinkWithShareDialog.bind(this)}
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
export default ShareComponent;
