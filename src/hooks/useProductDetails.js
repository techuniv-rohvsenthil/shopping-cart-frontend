import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductDetails = () => {
  const [data, setData] = useState([]);
  const [callComplete, setCallComplete] = useState(null);
  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        if (response.status === 200) {
          const products = response.data;
          setData(products);
        }
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    asyncFunc();
  }, []);
  return [data, callComplete];
};
export default useProductDetails;
