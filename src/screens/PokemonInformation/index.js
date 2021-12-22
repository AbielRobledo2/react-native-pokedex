import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import BACKGROUNDIMAGEN from '../../assets/imagens/Pokeball.png';
import HeaderName from '../PokemonInformation/components/HeaderName';
import {getColorFromPokemonType} from '../../utils/pokemonsColors';
import CardMenu from '../PokemonInformation/components/CardMenu';
import ImageContainer from '../PokemonInformation/components/ImageContainer';

const index = ({
  route: {
    params: {item},
  },
}) => {
  return (
    <View
      style={[
        styles.backGround,
        {backgroundColor: getColorFromPokemonType(item.types[0].name)},
      ]}>
      <Image style={styles.ImageBackground} source={BACKGROUNDIMAGEN} />

      <View style={styles.pokemonContainer}>
        <HeaderName item={item} />
        <ImageContainer source={item} />
      </View>

      <CardMenu item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  ImageBackground: {
    position: 'absolute',
    height: 200,
    width: 200,
    right: 0,
    top: 150,
  },
  pokemonContainer: {
    marginTop: 55,
  },
});

export default index;
