import React from 'react';
import Header from '../../components/Header';
import * as styles from './index.module.css';
import Checkout from '../../components/Checkout';
import TableContent from '../../components/TableContent';

const cart = [
  {
    item: "apple",
    price: 50,
    quantity: 2,
  },
  {
    item: "apple",
    price: 50,
    quantity: 2,
  },
  {
    item: "apple",
    price: 50,
    quantity: 2,
  },
  {
    item: "apple",
    price: 50,
    quantity: 2,
  },
]


const Cart = (prop) => {
    const {count} = prop;
  return (
    <div>
      <div className={styles.positioning}>
  <div className={styles.cart}>{count}</div>
      </div>
      <Header />
      <div className={styles.title}>
          Your Shopping Cart ({cart.length} items)
      </div>
      <div className={styles.components}>
          <div>
            <TableContent item="item" price="price" quantity="quantity" subtotal="subtotal" />
          </div>
          <div>
              <div>
            <Checkout cart={cart}/>
            </div>
            <button type="button" className={styles.button}>Continue Shopping</button>
          </div>
      </div>
    </div>
  );
}

export default Cart;