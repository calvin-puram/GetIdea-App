import React from 'react';
import { axe } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import ReactDom from 'react-dom';

import GlobalBtn from '@components/GlobalBtn';

describe('The <GlobalBtn /> Component', () => {
  const buttonProps = {
    tag: "Discover",
    link: 'ideas'
  }
  const setupGlobalBtn = () => render(<GlobalBtn tag={buttonProps.tag} link={buttonProps.link}/>);
  it('Should render a button with tag and a link name', () => {
    const { getByText, getByTestId } = setupGlobalBtn();

    expect(getByText('Discover')).toBeInTheDocument()
    expect(getByTestId('link')).toBeInTheDocument()
    
  });

  it('Should not fail any accessibility test', async () => {
    const { container } = setupGlobalBtn();
    expect(await axe(container)).toHaveNoViolations();
  });
});
