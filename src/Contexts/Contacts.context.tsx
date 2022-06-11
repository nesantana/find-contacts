import { api, urls } from '@src/Services/Api'
import React, { useContext, createContext, useState } from 'react'

interface iContactsContext {
  openCreateContact: boolean
  setOpenCreateContact(bool: boolean): void
  loadingContacts: boolean
  setLoadingContacts(bool: boolean): void
  searchContacts(): void
  createContact(contact: any): void
  contacts: any[]
}

export const ContactsContext = createContext({} as iContactsContext)

export const useContactsContext = () => useContext(ContactsContext)

export const ContactsProvider: React.FC<any> = ({ children }) => {
  const [openCreateContact, setOpenCreateContact] = useState<boolean>(false)
  const [loadingContacts, setLoadingContacts] = useState<boolean>(false)
  const [contacts, setContacts] = useState<any[]>([])

  const searchContacts = async () => {
    setLoadingContacts(true)

    try {
      const { data } : any = await api.get(urls.contacts.find)

      setContacts(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingContacts(false)
    }
  }

  const createContact = async (newContact: any) => {
    setLoadingContacts(false)

    try {
      await api.post(urls.contacts.create, { ...newContact })
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
    }}
    >
      { children }
    </ContactsContext.Provider>
  )
}
