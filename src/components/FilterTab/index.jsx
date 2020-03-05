import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import Button from '../Button';

const FilterTab = (props) => {
  const { data, setter } = props;
  if (!data.length) {
    return (
      <div />
    );
  }

  const categories = data.map((prod) => prod.prodCategory)
  const category = [...new Set(categories)];
  category.unshift('All');
  const tabs = category.map((tab) => (
    <Button buttonTestID="test-btn" setter={setter}>{tab}</Button>
  ));
  return (
    <div className={styles.tab}>
      {tabs}
    </div>
  );
};

FilterTab.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};


export default FilterTab;
