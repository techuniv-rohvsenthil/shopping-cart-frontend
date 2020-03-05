import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const Button = (props) => {
  const { children, buttonTestID, setter } = props;
  return (
    <button type="button" className={styles.button} data-testid={buttonTestID} onClick={() => setter(children)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
  buttonTestID: propTypes.string.isRequired,
};


export default Button;
