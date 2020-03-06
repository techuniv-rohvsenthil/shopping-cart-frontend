import { useState, useEffect } from 'react';
import axios from 'axios';

const useCartDetails = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [callComplete, setCallComplete] = useState(null);
  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get('http://localhost:8080/items');
        if (response.status === 200) {
          const items = response.data;
          setCart(items);
          setCartCount(items.length);
        }
        setCallComplete(true);
      } catch (err) {
        setCallComplete(false);
      }
    };
    asyncFunc();
  }, []);
  return [cart, cartCount, setCartCount, callComplete];
};
export default useCartDetails;
