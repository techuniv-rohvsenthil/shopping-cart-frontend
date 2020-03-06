import React from 'react';
import { render, waitForDomChange, fireEvent } from '@testing-library/react';
import CheckOut from './index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';

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
  
  jest.mock('axios');

describe('the CheckOut component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(<Router history={history}><CheckOut  cart={cart}/></Router>);
    expect(asFragment()).toMatchSnapshot();
  });

  xit('should make api call when checkout button is clicked', async () => {
    axios.mockImplementation(() => {});
    const history = createMemoryHistory();
    const { getByTestId } = render(<Router history={history}><CheckOut  cart={cart}/></Router>);
    await waitForDomChange();
    fireEvent.click(getByTestId('checkout'));
    expect(axios).toHaveBeenCalled();
    
  });

});