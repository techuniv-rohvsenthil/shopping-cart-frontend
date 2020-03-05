import React from 'react';
import Header from '../../components/Header';
import * as styles from './index.module.css';
import Checkout from '../../components/Checkout';
import { useHistory } from 'react-router-dom';
import Table from '../../components/Table';
import useCartDetails from '../../hooks/useCartDetails';

const Cart = () => {
    const history = useHistory();
    const [data] = useCartDetails();
    let items = {};
    data.forEach((item) => {
      const count = (!items[item.item])? 1: items[item.item].quantity + 1;
      return(
        items[item.item] = {
        name: item.item,
        price: item.price,
        quantity: count,
      }
      )
    })
  return (
    <div>
      <div className={styles.positioning}>
  <div className={styles.cart}>{data.length}</div>
      </div>
      <Header />
      <div className={styles.title}>
          Your Shopping Cart ({data.length} items)
      </div>
      <div className={styles.components}>
          <div>
            <Table items={items}/>
          </div>
          <div>
              <div>
            <Checkout cart={data}/>
            </div>
            <button type="button" className={styles.button} onClick={() => {history.goBack()}}>Continue Shopping</button>
          </div>
      </div>
    </div>
  );
}

export default Cart;