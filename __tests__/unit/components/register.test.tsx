import React from 'react'
import { axe } from 'jest-axe'
import { render, fireEvent } from '@testing-library/react'
import ReactDom from 'react-dom'

import Register from "@pages/register";

describe('The <Register /> Component', () => {
  const setupRegister = () =>  render(<Register />)

  const label = {
    name: "Name",
    email: 'Email Address',
    password: 'Password',
    password2: "Confirm Password"
  }

  const genSnapshot = () => {
  const {asFragment} = setupRegister();
    expect(asFragment()).toMatchSnapshot()
  }

  const genAccessOnLabel = (label) => {
    const {getByLabelText} = setupRegister();
    expect(getByLabelText(label)).toBeInTheDocument()
  }

  it('Should render the name field the user will see', () => {
    genSnapshot()
  })

  it('Should render the email field the user will see', () => {
    genSnapshot()
  })

  it('Should render the password field the user will see', () => {
    genSnapshot()
  })

  it('Should render the confirm password field the user will see', () => {
    genSnapshot()
  })

  it('Should make the name field accessible by setting the id and htmlFor attributes on label and input', () => {
    genAccessOnLabel(label.email)
  })

  it('Should make the password field accessible by setting the id and htmlFor attributes on label and input', () => {
    genAccessOnLabel(label.password)
  })

  it('Should make the email field accessible by setting the id and htmlFor attributes on label and input', () => {
    genAccessOnLabel(label.email)
  })

  it('Should make the confirm password field accessible by setting the id and htmlFor attributes on label and input', () => {
    genAccessOnLabel(label.password2)
  })

  it('Should not fail any accessibility test', async() => {
    const {container} = setupRegister();
    expect(await axe(container)).toHaveNoViolations()
  })
})