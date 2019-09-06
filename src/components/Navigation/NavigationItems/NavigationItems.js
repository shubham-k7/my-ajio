import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => {

    let loginLink = <NavigationItem clicked={props.onAuth} link="/shop/men" exact>Sign In/ Join AJIO</NavigationItem>;
    let logoutLink = null;
    if (props.isAuth && props.userData) {
        loginLink = <li style={{
                margin: '0px',
                height: '100%',
                width: 'auto',
                textAlign: 'center',
                textTransform: 'capitalize',
            }}><span style={{
                width: '100%',
                height: '100%',
                padding: '20px 10px',
                boxSizing: 'border-box',
                display: 'block',
            }}>Hi {props.userData.name}</span></li>;
        
        logoutLink = <NavigationItem link="/logout" exact>Sign Out</NavigationItem>;
    }
    return (
        <ul className={classes.NavigationItems} >
            {loginLink}
            <NavigationItem link="/" exact>Customer Care</NavigationItem>
            {logoutLink}
        </ul>
    );

}

export default navigationItems;