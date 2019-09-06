import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import { NavLink } from 'react-router-dom';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuList from '../../MenuList/MenuList';
const toolbar = (props) => {

    return (
        <div className={classes.MainHeader}>
            <header className={classes.Toolbar}>
                <div className={classes.Logo}>
                    <NavLink to="/"><Logo /></NavLink>
                </div>
                <nav className={[classes.DesktopOnly, classes['signup-header']].join(' ')}>
                    <NavigationItems {...props} />
                </nav>
                <nav className={[classes.Toolbar,classes.menu].join(' ')}>
                    <MenuList />
                </nav>
            </header>
        </div>
    );
}

export default toolbar;