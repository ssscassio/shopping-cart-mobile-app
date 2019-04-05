import { Platform } from 'react-native';
import colors from '../../config/colors';

const stripHeight = 150;
const overFlowSize = 40;
const spectatedVerticalMargin = 50;
const pictureHeight = stripHeight + overFlowSize;
const topDelay = overFlowSize / 2;
const horizontalMargin = 30;

const shadowStyle = {
  shadowOpacity: 0.35,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowColor: '#000',
  shadowRadius: 2,
  elevation: 5,
};

export default {
  containerWrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
  },
  pictureContainer: {
    height: stripHeight,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    marginVertical: spectatedVerticalMargin + topDelay,
  },
  picture: {
    height: pictureHeight,
    flex: 1,
  },
  pictureWrapper: {
    marginHorizontal: horizontalMargin,
    top: -topDelay,
    height: pictureHeight,
    flex: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    ...shadowStyle,
  },
  secondContainer: {
    flex: 1,
    marginBottom: 50,
  },
  contentBox: {
    backgroundColor: colors.backgroundLight,
    marginHorizontal: horizontalMargin,
    borderRadius: 2,
    padding: 15,
  },
  title: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 10,
    textAlign: 'justify',
    color: '#555',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  footBar: {
    backgroundColor: colors.backgroundLight,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingBottom: Platform.OS === 'ios' ? 50 : 20,
  },
  price: {
    fontSize: 17,
    flex: 1.5,
    color: colors.primary,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'column',
    flex: 3,
  },
};
