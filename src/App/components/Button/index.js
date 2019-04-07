/**
 * Simple styled Button that can show a icon at at right of the text
 *
 * @param {ButtonProps} {
 *   withIcon,
 *   iconName,
 *   text,
 *   textColor,
 *   onPress,
 *   ...otherProps
 * }
 * @returns <Button />
 * @format
 * @flow
 */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type { ButtonProps } from './types';
import styles from './styles';

const Button = ({ withIcon, iconName, text, textColor, onPress, ...otherProps }: ButtonProps) => (
  <TouchableOpacity {...otherProps} activeOpacity={0.6} onPress={onPress} style={styles.button}>
    {withIcon && <Icon name={iconName} size={24} color={textColor} />}
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);
/* Default Props for Button */
/* eslint-disable react/default-props-match-prop-types */
Button.defaultProps = {
  withIcon: false,
  iconName: 'add-shopping-cart',
  textColor: '#fff',
  otherProps: {},
};

// Exports component as default
export default Button;
