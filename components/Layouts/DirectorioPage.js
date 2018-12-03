// import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderPage from '../header/HeaderPage';

// create a component
class DirectorioPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View>
        <HeaderPage {...this.props} />
        <View>
          <Text>directorio</Text>
        </View>
      </View>
    );
  }
}

export default DirectorioPage;
