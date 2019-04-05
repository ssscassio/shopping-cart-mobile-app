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
    marginTop: 15,
    marginHorizontal: 15,
    marginBottom: 5,
    backgroundColor: colors.backgroundLight,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...shadowStyle,
  },
  pictureContainer: {
    padding: 10,
  },
  picture: {
    height: 110,
    width: 110,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.background,
  },
  leftContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  content: {
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  middleContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  productTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5,
  },
  quantity: {
    color: colors.ternary,
    fontWeight: 'bold',
  },
  moneyContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  price: {
    color: colors.primary,
    flex: 1,
  },
  total: {
    color: colors.ternary,
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: -7,
    left: -7,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.secondary,
    zIndex: 1,
  },
};
