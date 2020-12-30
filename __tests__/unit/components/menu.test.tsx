import React from 'react';
import { axe } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import ReactDom from 'react-dom';

import Menu from '@components/Menu';

describe('The <Menu /> Component', () => {
  
  const setupMenu = () => render(<Menu />);
  it('Should toggle menu dropdown icon when click', () => {
     const { queryByTestId, getByTestId } = setupMenu();

     expect(queryByTestId('dropdown')).toBeNull()
     fireEvent.click(getByTestId('menuBtn'))
     expect(queryByTestId('dropdown')).toBeInTheDocument()
     });

  it('Should not fail any accessibility test', async () => {
    const { container } = setupMenu();
    expect(await axe(container)).toHaveNoViolations();
  });
});
