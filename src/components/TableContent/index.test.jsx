import React from 'react';
import { render } from '@testing-library/react';
import TableContent from './index';

describe('the TableContent component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<TableContent  item="item" price="price" quantity="quantity" subtotal="subtotal"/>);
    expect(asFragment()).toMatchSnapshot();
  });
});