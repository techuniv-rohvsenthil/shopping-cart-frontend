import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import axios from 'axios';
import ViewProducts from './index';

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
    const { asFragment } = render(<ViewProducts />);

    expect(asFragment()).toMatchSnapshot();
  });

  xit('should make an api call to retrieve all templates', async () => {
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