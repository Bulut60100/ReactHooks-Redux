import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/actions/categoryActions';
import { saveProduct } from '../../redux/actions/productActions';
import ProductDetail from './productDetail';

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}) {
    const [product, setProduct] = useState({ ...props.product });
    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product });
    },[props.product]);

    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }));
    }

    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => {
            history.push("/")
        });
    }

    return (
        <ProductDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave} />
    )
}

export function getproductById(products, productId) {
    let product = products.find(product => product.id === productId) || null;
    return product;
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.props.productId;
    const product = productId && state.productReducer.length > 0 ? getproductById(state.productId, productId) : {}
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategories, saveProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)


