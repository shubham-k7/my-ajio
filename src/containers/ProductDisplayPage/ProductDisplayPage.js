import React, { Component } from 'react';
import classes from './ProductDisplayPage.module.css';
import Product from '../../components/Product/Product';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import CartItemDisplay from '../../components/CartItemDisplay/CartItemDisplay';
class ProductDisplayPage extends Component {

    state = {
        show: false,
        prodInModal: null,
    }

    componentDidMount = () => {
        this.props.onProductsInit();
    }

    quickViewHandler = (product) => {
        console.log(product);
        this.setState({ show: true, prodInModal: product });
    }

    modalClickedHandler = () => {
        this.setState({ show: false });
    }

    render() {
        let PDP = null;
        if (this.props.initLoading || this.props.cartLoading) {
            PDP = <Spinner />;
        }
        else {
            PDP = this.props.products.map(product => {
                return <Product
                    key={product.id}
                    product={product}
                    clicked={() => this.props.onAddToCart(product)}
                    quickViewClicked={() => this.quickViewHandler(product)} />
            });
        }
        let modalValue = null;
        if (this.state.show) {
            modalValue = <CartItemDisplay 
                        product={this.state.prodInModal}
                        key={this.state.prodInModal.id} />;
        }
        return (
            <div>
                <Modal show={this.state.show} modalClosed={this.modalClickedHandler}>
                    {modalValue}
                </Modal>
                <section className={classes.PDP}>
                    {PDP}
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.prodPage.products,
        initLoading: state.prodPage.loading,
        cartLoading: state.cart.loading,
    };
}

const mapDispathToProps = (dispatch) => {
    return {
        onProductsInit: () => dispatch(actions.initProducts()),
        onAddToCart: (productId) => dispatch(actions.addToCart(productId)),
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ProductDisplayPage);