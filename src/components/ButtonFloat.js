import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ButtonFloat = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name="qr-code-outline" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default ButtonFloat;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    top: '92%',
    backgroundColor: '#6B79DB',
    height: 65,
    width: 65,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
});
