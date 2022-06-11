import { useCategoriesContext } from '@src/Contexts/Categories.context'
import { useContactsContext } from '@src/Contexts/Contacts.context'
import {
  Box, Container, Input,
} from '@src/Styles'
import { Colors } from '@src/Styles/Colors'
import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import { Category } from '../Categories/styled'

export const CreateContact: React.FC<any> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])

  const {
    openCreateContact,
    createContact,
    loadingContacts,
  } = useContactsContext()

  const {
    categories,
    searchCategories,
  } = useCategoriesContext()

  useEffect(() => {
    if (!categories.length) {
      searchCategories()
    }
  }, [])

  const handleChangeSelectedCategories = (id: number) => {
    if (selectedCategories.includes(id)) {
      const newSelectedCategories = selectedCategories.filter((item) => item !== id)

      setSelectedCategories(newSelectedCategories)
      return
    }

    setSelectedCategories((prevState) => [
      ...prevState,
      id,
    ])
    console.log(selectedCategories)
  }

  // if (openCreateContact === false) {
  //   return <></>
  // }

  return (
    <Box background="underlayPrimary">
      <Container>
        <Box paddingY={60} paddingX={20}>
          <p>Criar contato</p>

          <Box marginTop={20} display="flex">
            <Input
              placeholder="Nome"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </Box>

          <Box marginTop={30} display="flex">
            <Input
              placeholder="E-mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <Input
              marginLeft={30}
              placeholder="Telefone"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </Box>

          <Box marginTop={30} display="flex" border={`1px solid ${Colors.text}`} borderRadius="10">
            <Box paddingX={20} paddingY={20} display="flex" flexWrap="wrap">
              {
                !!categories.length && categories.map((category) => (
                  <Category
                    small
                    negative
                    key={category.id}
                    className={selectedCategories.includes(category.id) ? 'active' : ''}
                    onClick={() => handleChangeSelectedCategories(category.id)}
                  >
                    { category.value }
                  </Category>
                ))
              }
            </Box>
          </Box>

          <Box marginTop={30} display="flex" justifyContent="flex-end">
            <Button
              loading={loadingContacts}
              onClick={() => createContact({
                name,
                email,
                phone,
                selectedCategories,
              })}
              title="Cadastrar"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
