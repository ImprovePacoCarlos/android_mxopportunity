// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
// import { ShareDialog } from 'react-native-fbsdk';
// create a component


class ShareComponent extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      title: 'Title',
      message: ' HOLA', // Note that according to the documentation at least one of "message" or "url" fields is required
      url: '',
      subject: 'Subject',
    };

    this.state = { shareLinkContent };
  }


  onSharePress = () => Share.share(this.state.shareLinkContent);

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>

        <View style={styles.sharemedia}>
          <Icon name="facebook-square" size={30} color="#222831" />
          <TouchableOpacity onPress={this.onSharePress}>
            <Text style={styles.textShare}>Facebook</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.sharemedia}>
          <Icon name="whatsapp" size={30} color="#222831" />
          <Text style={styles.textShare}>WhatsApp</Text>
        </View>

        <View style={styles.sharemedia}>
          <IconEmail name="email" size={30} color="#222831" />
          <Text style={styles.textShare}>Correo</Text>
        </View>

        <View style={styles.sharemedia}>
          <Icon name="twitter-square" size={30} color="#222831" />
          <Text style={styles.textShare}>Twitter</Text>
        </View>

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
