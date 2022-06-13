/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ContactsProvider } from '@src/Contexts/Contacts.context'
import { CategoriesProvider } from '@src/Contexts/Categories.context'
import { Contact } from './index'

describe('test corret use Contact', () => {
  it('should render Contact closed', () => {
    const contact = {
      id: 2,
      name: 'Mateus Santana',
      email: 'nesantana15@gmail.com',
      phone: '67981513750',
      categories: '[6,7,4]',
      createdAt: '2022-06-11T21:49:53.000Z',
      updatedAt: '2022-06-12T20:38:33.000Z',
    }

    render(
      <CategoriesProvider>
        <ContactsProvider>
          <Contact
            contact={contact}
            index={0}
            setContactOpen={() => {}}
            contactOpen={null}
          />
        </ContactsProvider>
      </CategoriesProvider>,
    )

    const name = screen.getByTestId('name')
    expect(name).toHaveTextContent(contact.name)

    const email = screen.queryByTestId('email')
    expect(email).not.toBeInTheDocument()

    const phone = screen.queryByTestId('phone')
    expect(phone).not.toBeInTheDocument()
  })

  it('should render Contact opened', () => {
    const contact = {
      id: 2,
      name: 'Mateus Santana',
      email: 'nesantana15@gmail.com',
      phone: '67981513750',
      categories: '[6,7,4]',
      createdAt: '2022-06-11T21:49:53.000Z',
      updatedAt: '2022-06-12T20:38:33.000Z',
    }

    render(
      <CategoriesProvider>
        <ContactsProvider>
          <Contact
            contact={contact}
            index={0}
            setContactOpen={() => {}}
            contactOpen={contact.id}
          />
        </ContactsProvider>
      </CategoriesProvider>,
    )

    const email = screen.queryByTestId('email')
    expect(email).toBeInTheDocument()

    const phone = screen.queryByTestId('phone')
    expect(phone).toBeInTheDocument()
  })
})
