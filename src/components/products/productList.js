import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge,Table,Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productsActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cartActions';
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';

class productList extends Component {

  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({quantity:1,product});
    alertify.success(product.productName + " sepete eklendi")
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color='warning'>productList</Badge>
          <Badge color='success'> {this.props.currrenCategory.categoryName} </Badge>
          </h3>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Units In Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {this.props.products.map(product => (
                  <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td> <Link to={"/saveProduct/"+product.id}>{product.productName}</Link></td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                  <td><Button color='primary' onClick={()=>this.addToCart(product)}>Add</Button></td>
                  </tr>
                ))} 
            </tbody>
          </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currrenCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
      addToCart : bindActionCreators(cartActions.addToCart, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(productList);

