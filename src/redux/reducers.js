import {combineReducers} from 'redux';

import cartReducer from './modules/cart';
import productsReducer from './modules/products';

const appReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
