/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Category } from './styled'

it('should render Category', () => {
  const simpleText = 'Nova Categoria'
  const { getByText, queryByText } = render(<Category>{ simpleText }</Category>)

  expect(getByText(simpleText)).toBeInTheDocument()
  expect(queryByText('Coisa aletória')).not.toBeInTheDocument()
})
