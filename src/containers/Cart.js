import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Layout, Button} from 'antd';

import {HeaderContainer, Footer, CartItem, PiceDetails} from '../core';

import {
  getCartProducts,
  addProductToCart,
  deleteProductFromCart,
} from '../redux';

const {Content, Sider} = Layout;

const CartContainer = ({
  history,
  cart: {productOnCart, count},
  addProductToCart,
  deleteProductFromCart,
}) => {
  const onAddProduct = product => {
    addProductToCart(product);
  };

  const calculate = productOnCart => {
    let totalPrice = 0;
    let totalDiscount = 0;
    let totalPayable = 0;
    productOnCart &&
      Object.keys(productOnCart).forEach(key => {
        if (productOnCart[key]) {
          totalPrice +=
            productOnCart[key].qty * productOnCart[key].price.display;
          totalDiscount +=
            productOnCart[key].qty * productOnCart[key].price.actual;
        }
      });

    totalPayable = totalPrice - totalDiscount;

    return {
      totalPrice,
      totalDiscount,
      totalPayable,
    };
  };

  const cartPriceData = calculate(productOnCart);
  return (
    <Layout className="cart-page">
      <HeaderContainer history={history} searchProduct={() => {}} />
      <Layout>
        <Content>
          {(productOnCart &&
            Object.keys(productOnCart).length > 0 &&
            Object.keys(productOnCart).map(productKey => (
              <CartItem
                key={productKey}
                onAddProduct={onAddProduct}
                onDeleteProduct={deleteProductFromCart}
                data={productOnCart[productKey]}
              />
            ))) || (
            <div className="no-product-found">
              <span className="label"> No Product in Cart</span>
              <Button onClick={() => history.push('/')}>
                Continue Shopping
              </Button>
            </div>
          )}
          {productOnCart && Object.keys(productOnCart).length > 0 && (
            <div className="mobile-view">
              <PiceDetails priceData={cartPriceData} count={count} />
            </div>
          )}
        </Content>

        {productOnCart && Object.keys(productOnCart).length > 0 && (
          <Sider width={350}>
            <PiceDetails priceData={cartPriceData} count={count} />
          </Sider>
        )}
      </Layout>
      <Footer />
    </Layout>
  );
};

const mapStateToProps = state => ({
  cart: getCartProducts(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    {addProductToCart, deleteProductFromCart}
  )(CartContainer)
);
