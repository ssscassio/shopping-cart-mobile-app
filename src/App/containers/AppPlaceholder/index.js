import React from 'react';
import { Image, View } from 'react-native';
import { images } from '../../config';
import styles from './styles';

const AppPlaceholder = () => (
  <View style={styles.container}>
    <Image source={images.jusbrasil} />
  </View>
);

export default AppPlaceholder;
