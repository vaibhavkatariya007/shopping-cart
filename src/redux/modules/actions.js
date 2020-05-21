import * as TYPES from './constants';

export const updateSortBy = sortby => ({
  type: TYPES.UPDATE_SORT_BY,
  payload: sortby,
});

export const addProductToCart = product => ({
  type: TYPES.ADD_PRODUCT_TO_CART,
  payload: product,
});

export const deleteProductFromCart = (productId, deleteQty) => ({
  type: TYPES.DELETE_PRODUCT_FROM_CART,
  payload: {productId, deleteQty},
});
