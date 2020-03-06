import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import TestRenderer from 'react-test-renderer';
import ViewProducts from './index';
const {act} = TestRenderer;

describe('the ViewProducts component', () => {
  it('should render correctly', () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({
        data: [{
          prodId: '4',
          prodName: "Apple - 1kg",
          prodPrice: '210',
          prodQuantity: '10',
          prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
        }],
    });
    
    const history = createMemoryHistory();
    const { asFragment } = render(<Router history={history}><ViewProducts /></Router>);
    expect(asFragment()).toMatchSnapshot();
});

  xit('should make an api call to retrieve all products', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({
        data: [{
          prodId: '4',
          prodName: "Apple - 1kg",
          prodPrice: '210',
          prodQuantity: '10',
          prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
        }],
    });
    render(<ViewProducts />);
    await waitForDomChange();
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/products');
  });
});
