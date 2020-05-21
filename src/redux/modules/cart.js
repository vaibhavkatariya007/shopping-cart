import * as TYPES from './constants';

const initialState = {
  productOnCart: {},
  count: 0,
};

export default (state = initialState, action) => {
  let Obj = {...state.productOnCart};
  let total = state.count || 0;
  switch (action.type) {
    case TYPES.ADD_PRODUCT_TO_CART:
      if (
        Obj &&
        Obj[action.payload.productId] &&
        Obj[action.payload.productId].qty
      ) {
        Obj[action.payload.productId].qty = ++Obj[action.payload.productId].qty;
        total += 1;
      } else {
        action.payload.qty = 1;
        Obj[action.payload.productId] = {...action.payload};
        total += 1;
      }

      return {
        ...state,
        productOnCart: Object.assign({}, Obj),
        count: total,
      };

    case TYPES.DELETE_PRODUCT_FROM_CART:
      if (
        Obj &&
        Obj[action.payload.productId] &&
        Obj[action.payload.productId].qty &&
        Obj[action.payload.productId].qty > 1 &&
        action.payload.deleteQty === 1
      ) {
        Obj[action.payload.productId].qty = --Obj[action.payload.productId].qty;
        total -= 1;
      } else {
        total -= Obj[action.payload.productId].qty;
        delete Obj[action.payload.productId];
      }

      return {
        ...state,
        productOnCart: Object.assign({}, Obj),
        count: total,
      };
    default:
      return state;
  }
};
