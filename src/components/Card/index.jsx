import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const Card = (props) => {
  const {prodObj} = props;

  return (
    <div className={styles.card} >
        <img src={prodObj.prodImage} alt="prodImage" width="150px" height="150px"/>
        <div className={styles.details}>
          <div className={styles.text}>
            {prodObj.prodName}
          </div>
          <div className={styles.text}>
            MRP {prodObj.prodPrice} /-
          </div>
          <div className={styles.text}>
            <button type="button" className={styles.button}>+</button>
            {prodObj.prodQuantity}
            <button type="button" className={styles.button}>-</button>
          </div>
        </div>
      </div>
  );
};


Card.propTypes = {
  prodObj: propTypes.objectOf(propTypes.string).isRequired,
};


export default Card;
