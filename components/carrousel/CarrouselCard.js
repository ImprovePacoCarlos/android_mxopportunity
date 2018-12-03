import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CarrouselCard = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View>
        <Text>carrousel Card</Text>
      </View>
    </View>

  );
};

export default CarrouselCard;


const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
