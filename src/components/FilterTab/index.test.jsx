import React from 'react';
import { render } from '@testing-library/react';
import FilterTab from './index';

const catArray = ['cat1', 'cat2', 'cat3'];

describe('the FilterTab component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<FilterTab  data={catArray} setter={()=>{}}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});