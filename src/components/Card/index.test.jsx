import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './index';

const prodObj = {
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
  }

describe('the Card component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Card  prodObj={prodObj}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  xit('should increment count when the + button is clicked', () => {
    const { getByTestId } = render(<Card prodObj={prodObj}/>);
    fireEvent.click(getByTestId('inc'));
    
  });

});
