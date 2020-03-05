import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const TableContent = (props) => {
  const {item, price, quantity, subtotal} = props;

  return (
    <div className={styles.card} >
          <div className={styles.text}>
            {item}
          </div>
          <div className={styles.text}>
            {price}
          </div>
          <div className={styles.text}>
            {quantity}
          </div>
          <div className={styles.text}>
            {subtotal}
          </div>
      </div>
  );
};


TableContent.propTypes = {
  item: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  quantity: propTypes.string.isRequired,
  subtotal: propTypes.string.isRequired,
};


export default TableContent;
