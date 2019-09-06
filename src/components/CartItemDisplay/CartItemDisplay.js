import React from 'react';
import classes from './CartItemDisplay.module.css';
import Button from '../UI/Button/Button';
const cartItemDisplay = ({product: {imgSrc, id, name, price}, quantity, removeFromCartClicked}) => {

    return (
        <div className={classes.CartItem}>
            <img src={imgSrc}></img>
            <p>Product ID: {id}</p>
            <p>Name: {name}</p>
            <p>Price: <strong> &#8377;{price.toFixed(2)}</strong></p>
            <p>Quantity: {quantity}</p>
            <Button btnType="Danger" clicked={removeFromCartClicked}>Remove From Cart</Button>
        </div>
    );
};

export default cartItemDisplay;