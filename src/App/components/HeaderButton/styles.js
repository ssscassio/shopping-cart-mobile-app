import colors from '../../config/colors';

export default {
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    height: 18,
    width: 18,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
};
