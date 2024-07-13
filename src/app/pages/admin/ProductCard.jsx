import React from 'react';
import './ProductCard.css';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import {Divider} from "@material-ui/core";

const ProductCard = ({ image, title, description, price, id }) => {
    let navigate = useNavigate();

    return (
        <div className="product-card">
            <div className="product-img-container">
                <img src={`data:image/jpeg;base64,${image}`} alt={title} className="product-image" />
            </div>
            <Divider variant="middle" />
            <div className="product-details">
                <h2 className="product-title">{title}</h2>
                <p className="product-description">Product Code: {description}</p>
                <div className="product-price">{price} <span style={{fontSize: '16px', color: '#56fc03'}}>in stock</span></div>
                <button className="product-button" onClick={() => navigate('products/'+id)}>View</button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default ProductCard;
