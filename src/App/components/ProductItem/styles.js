import colors from '../../config/colors';

const shadowStyle = {
  shadowOpacity: 0.35,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowColor: '#000',
  shadowRadius: 3,
  elevation: 5,
};

export default {
  container: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: colors.backgroundLight,
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...shadowStyle,
  },
  picture: {
    height: 100,
    width: 100,
    backgroundColor: colors.background,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  rightContainer: {
    flexDirection: 'column',
  },
  productTitle: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 15,
  },
  productPrice: {
    color: colors.primary,
  },
};
