import React from 'react';
import { render } from '@testing-library/react';
import CheckOut from './index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const cart = [
    {
      item: "apple",
      price: 50,
      quantity: 2,
    },
    {
      item: "apple",
      price: 50,
      quantity: 2,
    },
    {
      item: "apple",
      price: 50,
      quantity: 2,
    },
    {
      item: "apple",
      price: 50,
      quantity: 2,
    },
  ]
  

describe('the CheckOut component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(<Router history={history}><CheckOut  cart={cart}/></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});