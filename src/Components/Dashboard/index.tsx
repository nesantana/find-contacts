import { Container } from '@src/Styles'
import React from 'react'
import { Categories } from '../Categories'
import { CreateCategory } from '../CreateCategory'
import { Header } from '../Header'

export const Dashboard: React.FC<any> = ({ children }) => (
  <>
    <Container>
      <Header />
    </Container>

    <Categories />
    <CreateCategory />

    <Container>
      { children }
    </Container>
  </>
)
