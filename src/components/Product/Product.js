import React from 'react';
import classes from './Product.module.css';

const product = ({ product: { imgSrc, description, price, label }, clicked, quickViewClicked }) => {
    return (
        <div className={classes.card}>
            <div className={classes['product-image-container']}>
                <img src={imgSrc} alt={description} className={classes["product-image"]} />
                <a className={classes['quick']} onClick={quickViewClicked}>Quick View</a>
            </div>
            <ul>
                <li className={classes['brand']}>{label}</li>
                <li className={classes['price']}>&#8377;{price}</li>
                <li className={classes['description']}>{description}</li>
                <button className={classes['card-button']} onClick={clicked}>Add to Cart</button>
            </ul>
        </div>
    );
}

export default product;