import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import TableContent from '../TableContent';

const Table = (props) => {
    const { items } = props;
    if (!items.length) {
        return (
            <div className={styles.cardContainer}>
                <TableContent item="item" price="price" quantity="quantity" subtotal="subtotal" />
            </div>
        );
    }
    const rows = items.map((item) => (
        <TableContent item={item.item} price={item.price} quantity={item.quantity} subtotal="subtotal" />
    ));
    rows.unshift(<TableContent item="item" price="price" quantity="quantity" subtotal="subtotal" />);
    return (
        <div >
            <div >
                {rows}
            </div>
        </div>
    );
};

Table.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired,
};


export default Table;
