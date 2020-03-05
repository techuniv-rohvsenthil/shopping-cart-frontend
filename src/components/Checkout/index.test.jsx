import React from 'react';
import { render } from '@testing-library/react';
import CheckOut from './index';

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
    const { asFragment } = render(<CheckOut  cart={cart}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});