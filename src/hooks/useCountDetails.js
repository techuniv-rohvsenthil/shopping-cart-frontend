// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useCountDetails = () => {
//   const [count, setCount] = useState([]);
//   const [callComplete, setCallComplete] = useState(null);
//   let response = [];
//   let res = [];
//   useEffect(() => {
//     const asyncFunc = async () => {
//       try {
//          response = await axios.get('http://localhost:8080/items');
//          res = response.data;
//         setCallComplete(true);
//       } catch (err) {
//         setCallComplete(false);
//       }
//     };
//     console.log(res);
//     asyncFunc();
//     let items = {};
//     res.forEach((item) => {
//     const count = (!items[item.item]) ? 1 : items[item.item].quantity + 1;
//     return (
//       items[item.item] = {
//         name: item.item,
//         price: item.price,
//         quantity: count,
//       }
//     )
//   })
//   const quantity = Object.keys(items).map(key => items[key] );
//   console.log(quantity);
//   setCount(quantity)
//   console.log(count);
//   }, []);
//   return [count, setCount];
// };
// export default useCountDetails;