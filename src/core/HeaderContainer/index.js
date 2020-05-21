import React from 'react';

import {Layout, Input, Icon, Badge} from 'antd';

const {Header} = Layout;
const {Search} = Input;

const HeaderContainer = ({history, searchProduct, goToCart, count}) => (
  <Header>
    <span className="logo" onClick={() => history.push('/')}>
      <Icon type="star" /> <span className="label">Shopping</span>
    </span>
    <Search
      allowClear
      placeholder="Search"
      onChange={e => {
        searchProduct(e.target.value);
      }}
    />
    {goToCart && (
      <Badge count={count}>
        <Icon onClick={goToCart} type="shopping-cart" />
      </Badge>
    )}
  </Header>
);

export default HeaderContainer;
