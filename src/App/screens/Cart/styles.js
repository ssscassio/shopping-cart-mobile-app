/**
 * Styles for Cart Screen
 *
 * @flow
 * @format
 * */
import { Platform } from 'react-native';
import colors from '../../config/colors';

export default {
  container: {
    backgroundColor: colors.background,
    flex: 1,
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
  previewContainer: {
    flex: 1.5,
    flexDirection: 'column',
  },
  itemsCount: {
    color: colors.ternary,
  },
  totalContainer: {
    fontSize: 17,
    color: '#444',
    fontWeight: 'bold',
  },
  total: {
    fontSize: 17,
    color: colors.primary,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
  },
};
