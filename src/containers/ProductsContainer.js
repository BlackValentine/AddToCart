import React from 'react';
import { connect } from 'react-redux';
import Products from '../Components/Product';
import ProductItem from '../Components/ProductItem';
import { actAddToCart, actUpdateMessage } from './../actions/index'

function ProductsContainer(props) {
    var { products, onAddToCart, onUpdateMessage } = props;

    var showProduct = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onUpdateMessage={onUpdateMessage}
                />
            })
        }
        return result
    }

    return (
        <Products>
            {showProduct(products)}
        </Products>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },

        onUpdateMessage: (message) => {
            dispatch(actUpdateMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
