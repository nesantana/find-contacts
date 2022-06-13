import { useContactsContext } from '@src/Contexts/Contacts.context'
import { Box, Container, Input } from '@src/Styles'
import React, { useEffect, useMemo, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import {
  FiEye, FiCopy, FiSearch, FiPlus,
} from 'react-icons/fi'
import {
  FaWhatsapp,
  FaEnvelopeOpenText,
  FaUserEdit,
  FaPhone,
} from 'react-icons/fa'
import { removeChars } from '@src/Utils/removeCharacters'
import { useCategoriesContext } from '@src/Contexts/Categories.context'
import { Colors } from '@src/Styles/Colors'
import { useRouter } from 'next/router'
import { iContact } from '@src/Interfaces'
import { Category } from '../Categories/styled'
import { Contact } from '../Contact'

export const Contacts: React.FC<any> = () => {
  const {
    contacts,
    searchContacts,
    setContactToEdit,
    openCreateContact,
    setOpenCreateContact,
    contactToEdit,
  } = useContactsContext()
  const {
    categories,
    searchCategories,
  } = useCategoriesContext()
  const [contactOpen, setContactOpen] = useState<number|null>(null)
  const [termToFilterContacts, setTermToFilterContacts] = useState('')

  useEffect(() => {
    if (!contacts.length) {
      searchContacts()
    }

    if (!categories.length) {
      searchCategories()
    }
  }, [])

  const { query } = useRouter()

  const contactsByCategories = useMemo(() => {
    if (!query.categories) {
      return contacts
    }

    return (
      contacts.filter(
        (contact: iContact) => (
          JSON.parse(contact.categories).some((category: string) => (
            JSON.stringify(query?.categories).includes(category)
          ))
        ),
      )
    )
  }, [
    contacts,
    query,
  ])

  const contactsFilter = useMemo(() => contactsByCategories.filter(
    ({
      name,
    }) => name.toLowerCase().includes(termToFilterContacts.toLowerCase()),
  ), [
    contacts,
    termToFilterContacts,
    query,
  ])

  return (
    <Container>
      <Box position="relative" marginTop={60}>
        <Box position="absolute" top="29%" left="20px">
          <FiSearch fontSize={20} />
        </Box>
        <Input
          paddingLeft="50px"
          placeholder="Buscar contatos..."
          noBorder
          value={termToFilterContacts}
          onChange={({ target }) => setTermToFilterContacts(target.value)}
        />
        <Box
          position="absolute"
          top="22%"
          right="20px"
          className={openCreateContact ? 'active-plus' : ''}
          cursor="pointer"
          onClick={() => setOpenCreateContact(!openCreateContact)}
        >
          <FiPlus fontSize={30} color={Colors.primary} />
        </Box>
      </Box>

      {
        !!contacts.length && contactsFilter.map((contact, index) => (
          <Contact
            key={contact.id}
            contact={contact}
            index={index}
            setContactOpen={setContactOpen}
            contactOpen={contactOpen}
          />
        ))
      }
    </Container>
  )
}
