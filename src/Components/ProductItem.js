import React from 'react';
import * as Message from './../constants/Message'

function ProductItem(props) {
    var { product } = props;

    var showRating = (rating) => {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i key={i + 1} className="fa fa-star"></i>)
        }
        for (var j = 5; j > rating; j--) {
            result.push(<i key={j + 10} className="fa fa-star-o"></i>)
        }
        return result;
    }

    var onAddToCard = (product) => {
        props.onAddToCart(product)
        props.onUpdateMessage(Message.MSG_UPDATE_CART_SUCCESS)
    }

    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={product.image}
                        className="img-fluid" alt={product.name} />
                    <a href="#123">
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a href="#123">{product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            {showRating(product.rating)}
                        </li>
                    </ul>
                    <p className="card-text">
                        {product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{product.price}$</span>
                        <span className="right">
                            <a onClick={() => onAddToCard(product)} href="#123" className="btn-floating blue-gradient" data-toggle="tooltip"
                                data-placement="top" title="" data-original-title="Add to Cart">
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductItem;
