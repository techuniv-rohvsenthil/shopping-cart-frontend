import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import Card from '../Card';

const CardHolder = (props) => {
  const { data, setter, value, quantity } = props;
  if (!data.length) {
    return (
      <div className={styles.cardContainer}>
        <h2>No Data Available</h2>
      </div>
    );
  }
  const temp = [...data]
  temp.sort(function(a, b){
    return b.prodQuantity - a.prodQuantity
})
  const products = temp.map((prod) => (
    <Card
      key={prod.prodId}
      prodObj = {prod}
      setter = {setter}
      count = {value}
      quantity= {quantity}
    />
  ));
  return (
    <div className={styles.holder}>
    <div className={styles.cardContainer} >
      {products}
    </div>
    </div>
  );
};

CardHolder.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  setter: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
};


export default CardHolder;
