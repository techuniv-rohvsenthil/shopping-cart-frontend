import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('the ViewGeneratedTemplates component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});