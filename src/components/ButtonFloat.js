import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {RNCamera} from 'react-native-camera';
import Modal from 'react-native-modal';
import BarcodeMask from 'react-native-barcode-mask';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/constants';

const ButtonFloat = ({pokemons}) => {
  const [showQrReader, setShowQrReader] = useState(false);

  const navigation = useNavigation();

  const onQRRead = qrData => {
    const regexp = /^[0-9]+$/;

    if (regexp.test(qrData)) {
      const pokemon = pokemons.find(p => p.id === Number(qrData));

      if (pokemon) {
        setShowQrReader(false);
        navigation.reset({
          index: 1,
          routes: [{name: 'menu'}, {name: 'details', params: {pokemon}}],
        });
      }
    }
  };

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowQrReader(true)}>
        <Icon name="qr-code-outline" size={30} color="white" />
      </TouchableOpacity>
      <Modal isVisible={showQrReader} style={styles.Modal}>
        <View style={styles.CameraContainer}>
          <RNCamera
            style={{
              height: WINDOW_HEIGHT,
              width: WINDOW_WIDTH,
            }}
            onBarCodeRead={event => {
              onQRRead(event.data);
            }}>
            <BarcodeMask edgeColor="#62B1F6" showAnimatedLine={false} />

            <View style={styles.CancelButton}>
              <Icon
                name="ios-close-circle-outline"
                size={30}
                color="#fff"
                onPress={() => setShowQrReader(false)}
              />
            </View>
          </RNCamera>
        </View>
      </Modal>
    </>
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
  CameraContainer: {
    flex: 1,
    height: WINDOW_WIDTH,
    width: WINDOW_HEIGHT,
    backgroundCplor: '#ffffff',
  },
  Modal: {
    margin: 0,
    padding: 0,
    backgroundColor: 'red',
  },
  CancelButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});
