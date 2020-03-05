import React, {useState} from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const Card = (props) => {
  const {prodObj} = props;

  const [value, setValue] = useState(0);

  const increment = () => {
    if(value+1 < prodObj.prodQuantity){
      setValue(value+1);
    }
  }
  const decrement = () => {
    if(value-1 > 0){
      setValue(value-1);
    }
  }

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
            <button data-testid="dec" type="button" className={styles.button} onClick={decrement}>-</button>
            {value}
            <button data-testid="inc" type="button" className={styles.button} onClick={increment}>+</button>
          </div>
        </div>
      </div>
  );
};


Card.propTypes = {
  prodObj: propTypes.objectOf(propTypes.string).isRequired,
};


export default Card;
