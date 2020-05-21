import React from 'react';

import {Button, Col} from 'antd';
import './product.css';

const Product = ({data, onAddProduct}) => {
  return (
    <Col className="gutter-row product" xs={24} sm={12} md={8} lg={6} xl={6}>
      <div className="gutter-box">
        <img src={data.image} className="product-image" />
        <span className="product-name">{data.name}</span>
        <div className="price-discount-container">
          <span className="actual-price">&#8377; {data.price.actual}</span>
          <span className="selling-price">{data.price.display}</span>
          <span className="discount">{data.discount} % off</span>
        </div>
        <Button onClick={() => onAddProduct(data)}>Add to Cart</Button>
      </div>
    </Col>
  );
};

export default Product;
