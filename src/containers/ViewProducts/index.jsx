import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CardHolder from '../../components/CardHolder';
import useProductDetails from '../../hooks/useProductDetails'
import FilterTab from '../../components/FilterTab';

const ViewProducts = () => {
  const [data, callComplete] = useProductDetails();
  return (
    <div>
      <Header />
      <div>
        Filter Categories
      <FilterTab data={data} />
      </div>
      <CardHolder data={data} />
    </div>
  );
}

export default ViewProducts;