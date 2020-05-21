import React from 'react';

import {Button, Input} from 'antd';
import './cartitem.css';

const CartItem = ({data, onAddProduct, onDeleteProduct}) => {
  return (
    <div className="cart-item">
      <div className="item-detail-container">
        <img src={data.image} className="product-image" />
        <div className="details">
          <div className="product-name">
            <span>{data.name}</span>
          </div>
          <div className="price-details">
            <span className="actual-price">&#8377; {data.price.actual}</span>
            <span className="selling-price">{data.price.display}</span>
            <span className="discount">{data.discount} % off</span>
          </div>
        </div>
      </div>
      <div className="item-actions">
        <Button onClick={() => onDeleteProduct(data.productId, 1)}>-</Button>
        <Input disabled={true} value={data.qty} />
        <Button onClick={() => onAddProduct(data)}>+</Button>
      </div>
      <Button onClick={() => onDeleteProduct(data.productId, 'all')}>
        REMOVE
      </Button>
    </div>
  );
};

export default CartItem;
