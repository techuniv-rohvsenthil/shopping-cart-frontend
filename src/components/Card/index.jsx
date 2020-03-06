import React, {useState} from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import axios from 'axios';
//import useCountDetails from '../../hooks/useCountDetails';

const Card = (props) => {
  const {prodObj, setter, count} = props;
  // const [cart, setCart] = useCountDetails();
  // console.log(cart);
  const [value, setValue] = useState(0);
  //setValue(quantity.filter(i => i.name === prodObj.prodName).quantity);
  const increment = async () => {
    if(value < prodObj.prodQuantity){
      setValue(value+1);
      setter(count + 1);
      await axios({
        method: 'post',
        url: 'http://localhost:8080/items',
        data: { 
          cartObj: {
          item: prodObj.prodName, 
          price: prodObj.prodPrice,
          quantity: 1, 
          },
          action: 'store',
        },
      });

    }
  }
  const decrement = async () => {
    if(value-1 > -1){
      setValue(value-1);
      setter(count - 1);
      await axios({
        method: 'post',
        url: 'http://localhost:8080/items',
        data: { 
          cartObj: {
          item: prodObj.prodName, 
          price: prodObj.prodPrice,
          quantity: 1, 
          },
          action: 'remove',
        },
      });
    }
  }

  return (
    <div className={styles.card} >
      {prodObj.prodQuantity === 0? <div className={styles.sold}>Sold Out</div>: null}
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
  setter: propTypes.func.isRequired,
  count: propTypes.number.isRequired,
};


export default Card;
