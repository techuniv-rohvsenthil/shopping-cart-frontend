import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Checkout = (props) => {
    const history = useHistory();
    const { cart } = props;
    let price = 0;
    if (cart.length) {
        const items = cart.map((prod) => parseInt(prod.price))
        price = items.reduce((a, b) => a + b, 0)
    }

    const checkout = async () => {
        await axios({
            method: 'put',
            url: 'http://localhost:8080/checkouts',
          });
          history.goBack()
    }

    return (
        <div className={styles.box} data-testid="box-div" >
            <div className={styles.innerbox}>
                <div>
                Total
                </div>
                {price}
            </div>
            <div className={styles.divider}/>
            <button type="button" data-testid="checkout" className={styles.button} onClick={checkout}>Checkout</button>
        </div>
    );
};

Checkout.propTypes = {
    cart: propTypes.arrayOf(propTypes.object).isRequired,
};


export default Checkout;