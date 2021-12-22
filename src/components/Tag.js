import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tag = ({type}) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.typeText}>{type}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    marginVertical: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 'auto',
  },
  typeText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#FFF',
    paddingVertical: 1,
  },
});
