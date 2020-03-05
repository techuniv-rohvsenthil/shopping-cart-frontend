import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import CardHolder from './components/CardHolder';

const prodArray = [
  {
  prodId: '1',
  prodName: "Apple - 1kg",
  prodPrice: '210',
  prodQuantity: '10',
  prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
},

{
  prodId: '2',
  prodName: "Apple - 1kg",
  prodPrice: '210',
  prodQuantity: '10',
  prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
},

{
  prodId: '3',
  prodName: "Apple - 1kg",
  prodPrice: '210',
  prodQuantity: '10',
  prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
},
{
  prodId: '4',
  prodName: "Apple - 1kg",
  prodPrice: '210',
  prodQuantity: '10',
  prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
},
];

function App() {
  return (
    <div className="App">
      <Header />
      <Button buttonTestID="test-btn">All</Button>
      <CardHolder data={prodArray} />
    </div>
  );
}

export default App;
