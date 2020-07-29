import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Layout, Row, Col, Icon, Modal} from 'antd';
import _ from 'lodash';

import {HeaderContainer, Footer, Product, SortBy, Filters} from '../core';

import {
  getProductList,
  getCartProducts,
  addProductToCart,
  updateSortBy,
} from '../redux';

const {Content, Sider} = Layout;

const ProductList = ({
  history,
  productList: {products, sortBy},
  cart: {count},
  addProductToCart,
  updateSortBy,
}) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);
  const [filter, setFilter] = useState(null);
  const [SearchedData, setSearchedData] = useState(null);
  const goToCart = () => history.push('/cart');

  const onSortVisible = () => {
    setSortVisible(!sortVisible);
  };
  const onFilterVisible = () => {
    setFilterVisible(!filterVisible);
  };

  const onApplyFilter = value => {
    setFilter(value);
  };

  const onSortby = value => {
    updateSortBy(value);
  };

  const onAddProduct = product => {
    addProductToCart(product);
  };

  let ProductData = [];

  const filterOnData = SearchedData || products;

  if (sortBy == 'highToLow') {
    ProductData =
      filterOnData &&
      filterOnData.length > 0 &&
      _.orderBy(
        filterOnData,
        function(e) {
          return e.price.actual;
        },
        ['desc']
      );
  } else if (sortBy == 'lowToHigh') {
    ProductData =
      filterOnData &&
      filterOnData.length > 0 &&
      _.orderBy(
        filterOnData,
        function(e) {
          return e.price.actual;
        },
        ['asc']
      );
  } else if (sortBy == 'discount') {
    ProductData =
      filterOnData &&
      filterOnData.length > 0 &&
      _.orderBy(
        filterOnData,
        function(e) {
          return e.discount;
        },
        ['desc']
      );
  }

  if (filter && filter > 1000) {
    ProductData =
      ProductData &&
      ProductData.length &&
      ProductData.filter(product => {
        if (product.price.actual <= filter) {
          return product;
        }
      });
  }

  const searchProduct = keyword => {
    const SearchedData =
      products &&
      products.filter(product => {
        if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
          return product;
        }
      });
    setSearchedData(SearchedData);
  };

  const data = ProductData;
  return (
    <Layout className="product-listing">
      <HeaderContainer
        history={history}
        searchProduct={searchProduct}
        goToCart={goToCart}
        count={count}
      />
      <Layout>
        <Sider width={300}>
          <Filters
            filterVisible={filterVisible}
            onFilterVisible={onFilterVisible}
            appliedvalue={filter}
            onApplyFilter={onApplyFilter}
          />
        </Sider>
        <Content>
          <SortBy
            sortVisible={sortVisible}
            onSortVisible={onSortVisible}
            onSortby={onSortby}
            sortBy={sortBy}
          />
          <Row gutter={16}>
            <Col
              className="mobile-view"
              xs={12}
              sm={12}
              onClick={onSortVisible}>
              <Icon type="swap" />
              <span className="label"> Sort</span>
            </Col>
            <Col
              className="mobile-view"
              xs={12}
              sm={12}
              onClick={onFilterVisible}>
              <Icon type="filter" />
              <span className="label"> Filter</span>
            </Col>
            {data.length ? (
              data.map(productData => (
                <Product
                  key={productData.productId}
                  data={productData}
                  onAddProduct={onAddProduct}
                />
              ))
            ) : (
              <div className="no-product-found"> No Product Found</div>
            )}
          </Row>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

const mapStateToProps = state => ({
  productList: getProductList(state),
  cart: getCartProducts(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    {addProductToCart, updateSortBy}
  )(ProductList)
);
