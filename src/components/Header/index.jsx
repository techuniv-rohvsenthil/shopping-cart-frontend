import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { makeStyles } from '@material-ui/core/styles';
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
  return (
    <div className={styles.headerBar}>
      <ShoppingCartOutlinedIcon className={clsx(styleClass.root, styles.icon)} />
    </div>
  );
};


export default Header;
