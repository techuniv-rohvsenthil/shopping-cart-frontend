import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

describe('the Button component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button buttonTestID="btn-test">test-data</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
