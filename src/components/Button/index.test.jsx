import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('the Button component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button buttonTestID="btn-test" setter={()=>{}}>test-data</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button buttonTestID="test-btn" setter={onClickMock}>test-text</Button>);
    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
