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
import { Category } from '../Categories/styled'

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

  const handleOpenContact = (id: number) => {
    if (id === contactOpen) {
      return setContactOpen(null)
    }

    setContactOpen(id)
  }

  const contactsFilter = useMemo(() => contacts.filter(
    ({
      name,
    }) => name.toLowerCase().includes(termToFilterContacts.toLowerCase()),
  ), [
    contacts,
    termToFilterContacts,
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
          <Box
            key={contact.id}
            paddingY={20}
            paddingX={20}
            background={index % 2 === 0 ? 'underlayPrimary' : 'white'}
            borderRadius="10"
          >
            <Box
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                { contact.name }
              </Box>
              <Box display="flex" maxWidth="300" flexWrap="wrap">
                { JSON.parse(contact?.categories ?? []).map((id: string) => (
                  <Category
                    small
                    negative
                    fontSize={10}
                    noMarginBottom
                  >
                    { categories.find((category) => category.id === Number(id))?.value ?? '' }
                  </Category>
                )) }
              </Box>
              <Box color="primary">
                <FiEye
                  fontSize={17}
                  style={{ marginLeft: 20 }}
                  cursor="pointer"
                  onClick={() => handleOpenContact(contact.id as number)}
                />
                <a href={`https://api.whatsapp.com/send?phone=55${removeChars(contact.phone)}`} target="_blank" rel="noreferrer">
                  <FaWhatsapp
                    fontSize={17}
                    style={{ marginLeft: 20 }}
                    cursor="pointer"
                  />
                </a>
                <a
                  href={`tel:+55${removeChars(contact.phone)}`}
                >
                  <FaPhone
                    fontSize={17}
                    style={{ marginLeft: 20 }}
                    cursor="pointer"
                  />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                >
                  <FaEnvelopeOpenText
                    fontSize={17}
                    style={{ marginLeft: 20 }}
                    cursor="pointer"
                  />
                </a>
                <FaUserEdit
                  fontSize={17}
                  style={{ marginLeft: 20 }}
                  cursor="pointer"
                  onClick={() => setContactToEdit(contact)}
                />
              </Box>
            </Box>
            { contactOpen === contact.id && (
              <Box
                marginTop={30}
                width="100%"
                display="flex"
                color="primary"
                justifyContent="space-between"
                paddingX={20}
                paddingY={20}
                background="white"
                shadow
                borderRadius={10}
              >
                <Box
                  display="flex"
                  color="primary"
                  alignItems="center"
                  cursor="pointer"
                >
                  <FaEnvelopeOpenText
                    fontSize={17}
                  />

                  <Box
                    marginLeft={10}
                    color="primary"
                  >
                    { contact.email }
                  </Box>

                  <CopyToClipboard text={contact.email}>
                    <FiCopy
                      fontSize={17}
                      style={{ marginLeft: 10 }}
                      cursor="pointer"
                    />
                  </CopyToClipboard>
                </Box>
                <Box
                  display="flex"
                  color="primary"
                  alignItems="center"
                  cursor="pointer"
                >
                  <FaWhatsapp
                    fontSize={17}
                  />

                  <Box
                    marginLeft={10}
                    color="primary"
                  >
                    { contact.phone }
                  </Box>

                  <CopyToClipboard text={contact.phone}>
                    <FiCopy
                      fontSize={17}
                      style={{ marginLeft: 10 }}
                      cursor="pointer"
                    />
                  </CopyToClipboard>
                </Box>
              </Box>
            ) }
          </Box>
        ))
      }
    </Container>
  )
}
