import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const ImageContainer = ({source}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.pokemonContainer}
        source={{
          uri: source.sprites.front_default,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonContainer: {
    height: 250,
    width: 250,
  },
  imageContainer: {
    alignItems: 'center',
    height: 200,
  },
});
export default ImageContainer;
