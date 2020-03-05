import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';

const prodObj = {
  prodName: "Apple - 1kg",
  prodPrice: '210',
  prodQuantity: '10',
  prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
}

function App() {
  return (
    <div className="App">
      <Header />
      <Button buttonTestID="test-btn">All</Button>
      <Card prodObj={prodObj}/>
    </div>
  );
}

export default App;
