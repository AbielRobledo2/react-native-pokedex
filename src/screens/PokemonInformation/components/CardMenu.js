import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CardMenu = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>About</Text>

      <View style={styles.line} />

      <View style={styles.Container}>
        <View style={styles.aboutContainer}>
          <Text style={styles.subTitle}>Species</Text>

          <Text style={styles.description}>{item.genus}</Text>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.subTitle}>Height</Text>

          <Text style={styles.description}>{item.height} meters.</Text>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.subTitle}>Weight</Text>

          <Text style={styles.description}>{item.weight} kilograms. </Text>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.subTitle}>Abilities</Text>

          <Text style={styles.description}>
            {item.abilities.map(x => x.name).join(', ')}
          </Text>
        </View>
      </View>

      <Text style={styles.title}>Breeding</Text>

      <View style={styles.breedingContainer}>
        <View style={styles.aboutContainer}>
          <Text style={styles.subTitle}>Gender</Text>

          <Icon name="ios-male-outline" size={22} color="#B8BADE" />
          <Text style={styles.description}>{100 - item.gender_rate}%</Text>

          <Icon name="ios-female-outline" size={22} color="#F6B8D0" />
          <Text style={styles.description}>{item.gender_rate}%</Text>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.subTitle}>Egg Groups</Text>

          <Text style={styles.description}>
            {' '}
            {item.egg_groups.map(x => x.name).join(', ')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 30,
    paddingHorizontal: 20,
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  title: {
    top: 10,
    color: '#393D43',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  line: {
    marginTop: 20,
    backgroundColor: '#393D43',
    height: 1,
    width: 200,
  },
  aboutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  subTitle: {
    color: '#9D9EA2',
    fontWeight: '700',
    fontSize: 16,
    width: '30%',
  },
  description: {
    color: '#4B4E54',
    fontWeight: '700',
    fontSize: 16,
    flex: 1,
  },
  breedingContainer: {
    marginTop: 15,
  },
  Container: {
    marginTop: 15,
  },
});

export default CardMenu;
