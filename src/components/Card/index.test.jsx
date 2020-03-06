import React from 'react';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';
import Card from './index';
import axios from 'axios';

const prodObj = {
    prodName: "Apple - 1kg",
    prodPrice: '210',
    prodQuantity: '10',
    prodImage: 'https://techunic-eval4.s3.amazonaws.com/apple.jpg',
  }

 
jest.mock('axios');

describe('the Card component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Card  prodObj={prodObj}  setter={()=>{}} count={0}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  xit('should make api call when + button is clicked', async () => {
    axios.mockImplementation(() => {});
    const { getByTestId } = render(<Card prodObj={prodObj}  setter={()=>{}} count={0}/>);
    await waitForDomChange();
    fireEvent.click(getByTestId('inc'));
    expect(axios).toHaveBeenCalled();
    
  });

  xit('should make api call when - button is clicked', async () => {
    axios.mockImplementation(() => {});
    const { getByTestId } = render(<Card prodObj={prodObj}  setter={()=>{}} count={0}/>);
    fireEvent.click(getByTestId('dec'));
    expect(axios).toHaveBeenCalled();
    
  });

});
