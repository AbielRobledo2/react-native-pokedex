import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AboutTxt = ({item, name}) => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.subTitle}>{name}</Text>
      <Text style={styles.description}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  subTitle: {
    color: '#9D9EA2',
    fontWeight: '700',
    fontSize: 16,
  },
  description: {
    color: '#4B4E54',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 50,
  },
});
export default AboutTxt;
