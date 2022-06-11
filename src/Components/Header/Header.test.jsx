/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Header } from './index'

it('should render Header', () => {
  const { getByText } = render(<Header />)

  expect(getByText('Find')).toBeInTheDocument()
  expect(getByText('Contacts')).toBeInTheDocument()
})
