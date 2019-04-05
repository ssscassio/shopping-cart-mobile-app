/**
 * @format
 * @flow
 */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type ButtonProps = {
  withIcon?: boolean,
  iconName?: string,
  text: string,
  textColor?: string,
  onPress: () => mixed,
  otherProps?: {},
};
const Button = ({ withIcon, iconName, text, textColor, onPress, ...otherProps }: ButtonProps) => (
  <TouchableOpacity {...otherProps} activeOpacity={0.6} onPress={onPress} style={styles.button}>
    {withIcon && <Icon name={iconName} size={24} color={textColor} />}
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  withIcon: false,
  iconName: 'add-shopping-cart',
  textColor: '#fff',
  otherProps: {},
};

export default Button;
