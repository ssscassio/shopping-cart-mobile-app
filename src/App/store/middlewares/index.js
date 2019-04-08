import { ADD_ONE_ITEM } from '../actions/cart';

const cartMiddleware = store => next => action => {
  if (action.type === ADD_ONE_ITEM) {
    const { id, available } = action.item;
    const { cart } = store.getState();
    if (available > (cart.items[id] ? cart.items[id].onCart : 0)) {
      next(action);
    } else {
      next({ type: 'DUMMY' });
    }
  } else {
    next(action);
  }
};

export default cartMiddleware;
