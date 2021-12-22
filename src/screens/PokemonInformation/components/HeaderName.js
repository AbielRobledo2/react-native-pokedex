import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Tag from './Tag';

const HeaderName = ({item}) => {
  return (
    <View style={styles.Header}>
      <View>
        <Text style={styles.heading}>{item.name}</Text>
        <View flexDirection="row">
          {item.types.map(type => (
            <Tag key={type.name} type={type.name} />
          ))}
        </View>
      </View>

      <Text style={styles.idNumber}>#{item.id}</Text>
    </View>
  );
};

export default HeaderName;

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  idNumber: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
  },
});
