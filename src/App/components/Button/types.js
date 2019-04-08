/**
 * Types definition used on Button Component
 *
 * @format
 * @flow
 */
// PropTypes for Button
export type ButtonProps = {
  withIcon?: boolean,
  iconName?: string,
  text: string,
  textColor?: string,
  onPress: () => mixed,
  otherProps?: {},
};
