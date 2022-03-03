import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions';
import { Badge } from 'reactstrap';
import * as productsActions from '../../redux/actions/productActions';

class categoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }

  selectCategory = category => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  }

  render() {
    return (
      <div>
        <h3><Badge color='warning'>Categories</Badge> - {this.props.categories.length}</h3>
        <ListGroup>
          {
            this.props.categories.map(category => (
              <ListGroupItem 
              active={category.id === this.props.currrenCategory.id} 
              onClick={() => this.selectCategory(category) } 
              key={category.id}>
                {category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currrenCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
      getProducts: bindActionCreators(productsActions.getProducts, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(categoryList)