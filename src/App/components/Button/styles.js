/**
 * Styles for Button Component
 *
 * @flow
 * @format
 * */
import colors from '../../config/colors';

export default {
  button: {
    backgroundColor: colors.buttonColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    fontSize: 15,
    color: colors.backgroundLight,
  },
};
