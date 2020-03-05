import React, {useState} from 'react';
import Header from '../../components/Header';
import * as styles from './index.module.css';
import CardHolder from '../../components/CardHolder';
import useProductDetails from '../../hooks/useProductDetails'
import FilterTab from '../../components/FilterTab';

const ViewProducts = () => {
  const [data, callComplete] = useProductDetails();
  const [categoryName, setCategoryName] = useState('All');
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className={styles.positioning}>
  <div className={styles.cart}>{count}</div>
      </div>
      <Header />
      <div>
        Filter Categories
      <FilterTab data={data} setter={setCategoryName}/>
      <div className={styles.filterType}>
        {categoryName}
      </div>
      </div>
      <CardHolder data={data} setter={setCount} value={count}/>
    </div>
  );
}

export default ViewProducts;