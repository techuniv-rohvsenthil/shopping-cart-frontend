import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from './index';

describe('the Header component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(<Router history={history}><Header /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});
