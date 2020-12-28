import React from 'react';
import { axe } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import ReactDom from 'react-dom';

import Login from '@pages/login';

describe('The <Login /> Component', () => {
  const setupLogin = () => render(<Login />);

  const label = {
    email: 'Email',
    password: 'Password',
  };

  it('Should render the email field the user will see', () => {
    const { asFragment } = setupLogin();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render the password field the user will see', () => {
    const { asFragment } = setupLogin();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should make the email field accessible by setting the id and htmlFor attributes on label and input', () => {
    const { getByLabelText } = setupLogin();
    expect(getByLabelText(label.email)).toBeInTheDocument();
  });

  it('Should make the password field accessible by setting the id and htmlFor attributes on label and input', () => {
    const { getByLabelText } = setupLogin();
    expect(getByLabelText(label.password)).toBeInTheDocument();
  });

  it('Should not fail any accessibility test', async () => {
    const { container } = setupLogin();
    expect(await axe(container)).toHaveNoViolations();
  });
});
