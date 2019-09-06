import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import * as actions from '../../store/actions/index';
class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                {/* <SideDrawer
                    closed={this.sideDrawerCloseHandler}
                    open={this.state.showSideDrawer}
                    isAuth={this.props.isAuthenticated} /> */}
                <Toolbar
                    isAuth={this.props.isAuth}
                    userData={this.props.userData}
                    onAuth={this.props.onAuth}
                    // onLogout={this.props.onLogout}
                    drawerToggledClicked={this.sideDrawerToggleHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        onAuth: () => dispatch(actions.authStart()),
        // onLogout: () => dispatch(actions.authLogout())
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthenticated && (state.auth.userData!=null),
        userData: state.auth.userData,
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Layout);