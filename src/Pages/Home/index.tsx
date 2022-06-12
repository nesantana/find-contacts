import { Contacts } from '@src/Components/Contacts'
import { CreateContact } from '@src/Components/CreateContact'
import { Dashboard } from '@src/Components/Dashboard'
import React from 'react'

export const Home: React.FC<any> = () => (
  <Dashboard>
    <CreateContact />
    <Contacts />
  </Dashboard>
)
