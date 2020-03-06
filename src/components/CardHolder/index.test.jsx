import React from 'react';
import { render } from '@testing-library/react';
import CardHolder from './index';

const prodArray = [
    {
    prodId: '1',
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
  },
  
  {
    prodId: '2',
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
  },
  
  {
    prodId: '3',
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
  },
  {
    prodId: '4',
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
  },
  ];

describe('the CardHolder component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CardHolder data={prodArray} setter={() => {}} value={0}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});