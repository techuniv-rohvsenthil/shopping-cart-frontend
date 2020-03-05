import React, {useState} from 'react';
import Header from '../../components/Header';
import * as styles from './index.module.css';
import CardHolder from '../../components/CardHolder';
import useProductDetails from '../../hooks/useProductDetails'
import FilterTab from '../../components/FilterTab';

const Cart = (prop) => {
    const {count} = prop;
  return (
    <div>
      <div className={styles.positioning}>
  <div className={styles.cart}>{count}</div>
      </div>
      <Header />
      <div className={styles.title}>
          Your Shopping Cart (3 items)
      </div>
      <div className={styles.components}>
          <div>
            summary
          </div>
          <div>
              <div>
            checkout
            </div>

          </div>
      </div>
    </div>
  );
}

export default Cart;