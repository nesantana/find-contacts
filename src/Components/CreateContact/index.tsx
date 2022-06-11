import { useContactsContext } from '@src/Contexts/Contacts.context'
import {
  Box, Container, Input,
} from '@src/Styles'
import React, { useState } from 'react'
import { Button } from '../Button'

export const CreateContact: React.FC<any> = () => {
  const [value, setValue] = useState('')

  const {
    openCreateContact,
    createContact,
    loadingContacts,
  } = useContactsContext()

  if (openCreateContact === false) {
    return <></>
  }

  return (
    <Box background="underlayPrimary">
      <Container>
        <Box paddingY={60} paddingX={20}>
          <p>Criar contato</p>

          <Box marginTop={20} display="flex">
            <Input
              placeholder="Nome"
              value={value}
              onChange={({ target }) => setValue(target.value)}
            />

            <Button
              marginLeft={20}
              loading={loadingContacts}
              onClick={() => createContact(value)}
              title="Cadastrar"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
