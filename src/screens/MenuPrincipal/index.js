import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import Card from '../../components/Card';
import BACKGROUNDIMAGEN from '../../assets/imagens/PokeballBackground.png';
import ButtonFloat from '../../components/ButtonFloat';
import {getAllPokemonQuery} from '../../services/pokemonApi';

export default function MenuPokedex() {
  const navigation = useNavigation();
  const [limit, setLimitScroll] = useState(20);
  const [searchTerm, setsearchTerm] = useState('');

  const {data} = useQuery(getAllPokemonQuery, {
    variables: {limit: limit},
  });

  const pokemons = data?.results || [];

  const onScrollEnd = () => {
    setLimitScroll(limit + 20);
  };

  const filterItems = () => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    return pokemons.filter(
      item =>
        item.name.toLowerCase().indexOf(normalizedSearch) !== -1 ||
        item.types.some(
          t => t.name.toLowerCase().indexOf(normalizedSearch) !== -1,
        ),
    );
  };

  return (
    <View style={styles.back}>
      <Image style={styles.ImageBackground} source={BACKGROUNDIMAGEN} />
      <Text style={styles.heading}>Pokedex</Text>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={26} color="#B3B3B3" />
        <Input
          placeholderTextColor="#B3B3B3"
          placeholder="What Pokémon are you looking for?"
          onChangeText={setsearchTerm}
        />
      </View>

      <View style={styles.scrollContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterItems()}
          renderItem={({item}) => (
            <Card
              onPress={() => navigation.push('pokemon-information', {item})}
              item={item}
            />
          )}
          numColumns={2}
          onEndReached={() => onScrollEnd()}
          onEndReachedThreshold={1}
        />
      </View>

      <ButtonFloat />
    </View>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    position: 'absolute',
    right: 0,
  },
  back: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313B45',
  },
  searchContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  inputSearch: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
  },
});
