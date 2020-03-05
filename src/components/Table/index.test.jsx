import React from 'react';
import { render } from '@testing-library/react';
import Table from './index';

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
  

describe('the Table component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Table items={cart}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});