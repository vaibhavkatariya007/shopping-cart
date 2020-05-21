import * as TYPES from './constants';
import data from './../../cart.json';

const initialState = {
  error: null,
  request: false,
  products: data.items || [],
  sortBy: 'highToLow',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.REQUEST_PRODUCTS:
      return {
        ...state,
        request: true,
      };
    case TYPES.RECEIVE_PRODUCTS:
      return {...state, products: data.items, request: false};
    case TYPES.REQUEST_PRODUCTS_ERROR:
      return {
        ...state,
        error: true,
        request: false,
      };
    case TYPES.UPDATE_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};
