// import liraries
import React, { Component } from 'react';
import {
  StyleSheet, Image, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ShareComponent from '../share/ShareComponent';
import ShareComponentApp from '../share/ShareComponentApp';


class HeaderPage extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  toggleshareButton=() => {
    const { show } = this.state;
    this.setState({ show: !show });
  }


  render() {
    const { data, navigation } = this.props;
    // console.log(this.props);
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          >
            <Icon name="md-menu" size={30} color="#222831" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('Home'); }}>
            <Image style={styles.drawerImage} source={require('../../assets/images/logo.png')} />
          </TouchableOpacity>


          {
           navigation.state.routeName !== 'Detalle'
             ? <TouchableOpacity onPress={() => { this.toggleshareButton(); }}><Icon name="md-share" style={styles.icon} /></TouchableOpacity>

             : <TouchableOpacity onPress={() => { this.toggleshareButton(); }}><Icon name="md-share" style={styles.icondos} /></TouchableOpacity>
          }
        </View>

        {
          this.state.show && navigation.state.routeName === 'Detalle' ? <ShareComponent articulo={data} /> : null
        }

        {
          this.state.show && navigation.state.routeName !== 'Detalle' ? <ShareComponentApp /> : null
        }

      </View>

    );
  }
}
// define your styles
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  icon: {
    fontSize: 30,
    color: 'black',
  },
  icondos: {
    fontSize: 30,
    color: '#00adb5',
  },
  drawerImage: {
    height: 60,
    width: 250,
  },
});

// make this component available to the app
export default HeaderPage;
