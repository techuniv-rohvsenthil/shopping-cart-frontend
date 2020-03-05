import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CardHolder from '../../components/CardHolder';
import useProductDetails from '../../hooks/useProductDetails'

const ViewProducts = () => {
  const [data, callComplete] = useProductDetails();
  return (
    <div>
      <Header />
      <Button buttonTestID="test-btn">All</Button>
      <CardHolder data={data} />
    </div>
  );
}

export default ViewProducts;