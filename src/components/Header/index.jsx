import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import * as styles from './index.module.css';

const useStyles = makeStyles({
  root: {
    height: '2.5rem',
    width: '2.5rem',
  },
});

const Header = () => {
  const styleClass = useStyles();
  const history = useHistory();
  return (
    <div className={styles.headerBar}>
      <button type="button" className={styles.button} onClick={() => {history.push('/cart');}}>
      <ShoppingCartOutlinedIcon className={clsx(styleClass.root, styles.icon)} />
      </button>
    </div>
  );
};


export default Header;
