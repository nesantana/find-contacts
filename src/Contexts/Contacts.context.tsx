import { iContact } from '@src/Interfaces'
import { api, urls } from '@src/Services/Api'
import { isEmpty } from 'lodash'
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react'

interface iContactsContext {
  openCreateContact: boolean
  setOpenCreateContact(bool: boolean): void
  contactToEdit: iContact | null
  setContactToEdit(contact: iContact | null): void
  isEdit: boolean
  loadingContacts: boolean
  setLoadingContacts(bool: boolean): void
  searchContacts(): void
  createContact(contact: iContact): void
  updateContact(contact: iContact): void
  contacts: iContact[]
}

export const ContactsContext = createContext({} as iContactsContext)

export const useContactsContext = () => useContext(ContactsContext)

export const ContactsProvider: React.FC<any> = ({ children }) => {
  const [openCreateContact, setOpenCreateContact] = useState<boolean>(false)
  const [loadingContacts, setLoadingContacts] = useState<boolean>(false)
  const [contacts, setContacts] = useState<iContact[]>([])

  const [contactToEdit, setContactToEdit] = useState<iContact|null>(null)

  const isEdit = useMemo(() => isEmpty(contactToEdit) === false, [contactToEdit])

  useEffect(() => {
    if (isEmpty(contactToEdit) === false) {
      return setOpenCreateContact(true)
    }

    return setOpenCreateContact(false)
  }, [contactToEdit])

  const searchContacts = async () => {
    setLoadingContacts(true)

    try {
      const { data } : any = await api.get(urls.contacts.find)

      console.log(data)
      setContacts(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingContacts(false)
    }
  }

  const updateContact = async (contact: iContact) => {
    setLoadingContacts(false)

    try {
      await api.post(urls.contacts.edit, { ...contact })
    } catch (error) {
      console.error(error)
    } finally {
      setOpenCreateContact(false)
      searchContacts()
    }
  }

  const createContact = async (contact: iContact) => {
    setLoadingContacts(false)

    try {
      await api.post(urls.contacts.create, { ...contact })
    } catch (error) {
      console.error(error)
    } finally {
      setOpenCreateContact(false)
      searchContacts()
    }
  }

  return (
    <ContactsContext.Provider value={{
      openCreateContact,
      setOpenCreateContact,
      loadingContacts,
      setLoadingContacts,
      searchContacts,
      createContact,
      contacts,
      isEdit,
      contactToEdit,
      setContactToEdit,
      updateContact,
    }}
    >
      { children }
    </ContactsContext.Provider>
  )
}
