import React, {useState} from 'react';
import Header from '../../components/Header';
import * as styles from './index.module.css';
import CardHolder from '../../components/CardHolder';
import useProductDetails from '../../hooks/useProductDetails'
import useCartDetails from '../../hooks/useCartDetails'
import FilterTab from '../../components/FilterTab';

const ViewProducts = () => {
  const [data] = useProductDetails();
  const [, cartCount, setCartCount] = useCartDetails();
  const [categoryName, setCategoryName] = useState('All');
  const categories = data.map((prod) => prod.prodCategory)
  const category = [...new Set(categories)];
  category.unshift('All');
  return (
    <div>
      <div className={styles.positioning}>
      <div className={styles.cart}>{cartCount}</div>
      </div>
      <Header />
      <div>
        Filter Categories
      <FilterTab data={category} setter={setCategoryName}/>
      <div className={styles.filterType}>
        {categoryName}
      </div>
      </div>
      <CardHolder data={categoryName === 'All'? data : data.filter(prod => prod.prodCategory === categoryName)} setter={setCartCount} value={cartCount}/>
    </div>
  );
}

export default ViewProducts;