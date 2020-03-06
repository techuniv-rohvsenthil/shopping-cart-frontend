import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import Cart from './index';
import TestRenderer from 'react-test-renderer';
const { act } = TestRenderer;

describe('the Cart component', () => {
  it('should render correctly', () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({
      data: [{}]
    });
      const history = createMemoryHistory();
      const { asFragment } = render(<Router history={history}><Cart /></Router>);
      expect(asFragment()).toMatchSnapshot();
  });

  xit('should make an api call to retrieve all items in cart', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({
      data: [{
      }],
    });
    const history = createMemoryHistory();
    render(<Router history={history}><Cart /></Router>);
    await waitForDomChange();
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/items');
  });
});
