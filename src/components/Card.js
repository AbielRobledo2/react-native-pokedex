import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import IMAGENPOKEBALL from '../assets/imagens/Pokeball.png';
import Tag from '../components/Tag';
import {getColorFromPokemonType} from '../utils/pokemonsColors';

const Card = ({item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        {backgroundColor: getColorFromPokemonType(item.types[0].name)},
      ]}>
      <View>
        <Text style={styles.title}> {item.name} </Text>
        <View style={styles.tagContainer}>
          {item.types.map(type => (
            <Tag key={type.name} type={type.name} />
          ))}
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.imagePokeball} source={IMAGENPOKEBALL} />
        <Image
          style={styles.image}
          source={{
            uri: item.sprites.front_default,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#49D0B0',
    borderRadius: 15,
    margin: '1%',
    padding: 10,
    flexDirection: 'row',
    width: '49%',
    height: 100,
    elevation: 6,
  },
  title: {
    top: 5,
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  tagContainer: {
    marginVertical: 7,
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
    top: 25,
  },
  image: {
    width: 85,
    height: 85,
    right: 5,
    top: -5,
  },
  imagePokeball: {
    position: 'absolute',
    width: 75,
    height: 75,
    right: 0,
  },
});
