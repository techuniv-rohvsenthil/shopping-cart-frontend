import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <Button buttonTestID="test-btn">All</Button>
    </div>
  );
}

export default App;
