import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import TableContent from '../TableContent';

const Table = (props) => {
    const { items } = props;
    const data = Object.keys(items).map(key => items[key] );
    if (!data.length) {
        return (
            <div className={styles.cardContainer}>
                <TableContent item="item" price="price" quantity="quantity" subtotal="subtotal" />
            </div>
        );
    }
    const rows = data.map((item) => (
        <TableContent item={item.name} price={item.price} quantity={item.quantity} subtotal={item.price*item.quantity} />
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
    items: propTypes.objectOf(propTypes.object).isRequired,
};


export default Table;
