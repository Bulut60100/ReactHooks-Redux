import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import CategoryList from '../categories/categoryList';
import ProductList from '../products/productList';

export default class dashboard extends Component {
  render() {
    return (
      <Row>
          <Col xs="3">
              <CategoryList></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList></ProductList>
          </Col>
      </Row>
    )
  }
}
