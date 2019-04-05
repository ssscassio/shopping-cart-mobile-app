import colors from '../../config/colors';

const shadowStyle = {
  shadowOpacity: 0.35,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowColor: '#000',
  shadowRadius: 2,
  elevation: 3,
};

export default {
  container: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 0,
    backgroundColor: colors.backgroundLight,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...shadowStyle,
  },
  picture: {
    height: 110,
    flex: 2,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.background,
  },
  rightContainer: {
    flex: 3,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  productTitle: {
    flex: 1,
    color: '#333',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  productPrice: {
    flex: 1,
    color: colors.primary,
    fontSize: 16,
  },
  addButtonContainer: {
    backgroundColor: colors.buttonColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  addButtonText: {
    color: colors.backgroundLight,
  },
};
