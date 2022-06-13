import { useCategoriesContext } from '@src/Contexts/Categories.context'
import { useContactsContext } from '@src/Contexts/Contacts.context'
import { iContact } from '@src/Interfaces'
import { Box } from '@src/Styles'
import { removeChars } from '@src/Utils/removeCharacters'
import React, { useEffect } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {
  FaEnvelopeOpenText, FaPhone, FaUserEdit, FaWhatsapp,
} from 'react-icons/fa'
import { FiCopy, FiEye } from 'react-icons/fi'
import { Category } from '../Categories/styled'

interface iContactComponent {
  contact: iContact
  index: number
  contactOpen: number | null
  setContactOpen(bool: number | null): void
}

export const Contact: React.FC<iContactComponent> = ({
  contact = {} as iContact,
  index,
  contactOpen = null,
  setContactOpen = () => {},
}) => {
  const {
    categories,
    searchCategories,
  } = useCategoriesContext()

  const { setContactToEdit } = useContactsContext()

  const handleOpenContact = (id: number) => {
    if (id === contactOpen) {
      return setContactOpen(null)
    }

    setContactOpen(id)
  }

  useEffect(() => {
    if (!categories.length) {
      searchCategories()
    }
  }, [])

  return (
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
        <Box data-testid="name">
          { contact.name }
        </Box>
        <Box display="flex" maxWidth="300" flexWrap="wrap">
          { JSON.parse(contact?.categories ?? []).map((id: string) => (
            <Category
              key={`${id}-categories-${contact.id}`}
              small
              negative
              fontSize={10}
              noMarginBottom
              className="active"
            >
              { categories?.find((category) => category.id === Number(id))?.value ?? '' }
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
        data-testid="open-box"
      >
        <Box
          display="flex"
          color="primary"
          alignItems="center"
          cursor="pointer"
          data-testid="email"
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
          data-testid="phone"
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
  )
}
