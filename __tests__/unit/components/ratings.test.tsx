import React from 'react'
import { axe } from 'jest-axe'
import { render, fireEvent } from '@testing-library/react'
import ReactDom from 'react-dom'

import Rating from "@components/Rating";

describe('The <Rating /> Component', () => {
  const ratingProps = {
    image:"/img/business/auto.jpg",
    title:"Become An Auto Specialist",
    access:"Premium",
  }

  it('Should render an idea tile with title, image, access', () => {
    const {getByText, getByTestId} =  render(<Rating {...ratingProps as any}/>)
    expect(getByText(ratingProps.access)).toBeInTheDocument();
  })

})