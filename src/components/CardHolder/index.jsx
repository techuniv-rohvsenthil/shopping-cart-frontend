import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import Card from '../Card';

const CardHolder = (props) => {
  const { data } = props;
  if (!data.length) {
    return (
      <div className={styles.cardContainer}>
        <h2>No Data Available</h2>
      </div>
    );
  }
  const products = data.map((prod) => (
    <Card
      key={prod.prodId}
      prodObj = {prod}
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
};


export default CardHolder;
