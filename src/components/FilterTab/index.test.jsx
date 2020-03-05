import React from 'react';
import { render } from '@testing-library/react';
import FilterTab from './index';

const prodArray = [
    {
    prodId: '1',
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
    category: 'cat1',
  },
  
  {
    prodId: '2',
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
    category: 'cat1',
  },
  
  {
    prodId: '3',
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
    category: 'cat1',
  },
  {
    prodId: '4',
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
    category: 'cat1',
  },
  ];

describe('the FilterTab component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<FilterTab  data={prodArray}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});