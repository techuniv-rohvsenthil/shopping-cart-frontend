import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const Checkout = (props) => {
    const { cart } = props;
    let price = 0;
    if (cart.length) {
        const items = cart.map((prod) => prod.price)
        price = items.reduce((a, b) => a + b, 0)
    }
    return (
        <div className={styles.box}>
            <div className={styles.innerbox}>
                <div>
                Total
                </div>
                {price}
            </div>
            <div className={styles.divider}/>
            <button type="button" className={styles.button}>Checkout</button>
        </div>
    );
};

Checkout.propTypes = {
    cart: propTypes.arrayOf(propTypes.object).isRequired,
};


export default Checkout;