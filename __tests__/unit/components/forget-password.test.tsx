import React from 'react'
import { axe } from 'jest-axe'
import { render, fireEvent } from '@testing-library/react'
import ReactDom from 'react-dom'

import ForgetPassword from "@pages/forgot-password";

describe('The <ForgetPassword /> Component', () => {
  const setupForgetPassword = () =>  render(<ForgetPassword />)

  const label = {
    email: 'Email',
  }

  it('Should render the email field the user will see', () => {
    const {asFragment} = setupForgetPassword();
    expect(asFragment()).toMatchSnapshot()
  })


  it('Should make the email field accessible by setting the id and htmlFor attributes on label and input', () => {
    const {getByLabelText} = setupForgetPassword();
    expect(getByLabelText(label.email)).toBeInTheDocument()
  })

  it('Should not fail any accessibility test', async() => {
    const {container} = setupForgetPassword();
    expect(await axe(container)).toHaveNoViolations()
  })

})