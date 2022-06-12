import { useCategoriesContext } from '@src/Contexts/Categories.context'
import { useContactsContext } from '@src/Contexts/Contacts.context'
import {
  Box, Container, Input,
} from '@src/Styles'
import { Colors } from '@src/Styles/Colors'
import { isEmpty } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'
import { Button } from '../Button'
import { Category } from '../Categories/styled'

export const CreateContact: React.FC<any> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])

  const [termToFilterCategories, setTermToFilterCategories] = useState('')

  const {
    openCreateContact,
    createContact,
    updateContact,
    loadingContacts,
    contactToEdit,
    setContactToEdit,
    isEdit,
  } = useContactsContext()

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit?.name ?? '')
      setEmail(contactToEdit?.email ?? '')
      setPhone(contactToEdit?.phone ?? '')
      setSelectedCategories(JSON.parse(contactToEdit?.categories) ?? [])
    }
  }, [contactToEdit])

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
  }

  const categoriesFilter = useMemo(() => categories.filter(
    ({
      value,
    }) => value.toLowerCase().includes(termToFilterCategories.toLowerCase()),
  ), [
    categories,
    termToFilterCategories,
  ])

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
            <Box paddingX="0px 20" paddingY="20px 20" display="flex" flexWrap="wrap">
              <Input
                placeholder="Buscar categorias..."
                noBorder
                marginBottom={20}
                value={termToFilterCategories}
                onChange={({ target }) => setTermToFilterCategories(target.value)}
              />
              {
                !!categories.length && categoriesFilter.map((category) => (
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

          <Box marginTop={30} display="flex" justifyContent={isEdit ? 'space-between' : 'flex-end'}>
            {
              isEdit && (
                <>
                  <Button
                    onClick={() => setContactToEdit(null)}
                    title="Cancelar"
                    type="error"
                  />

                  <Button
                    loading={loadingContacts}
                    onClick={() => updateContact({
                      id: contactToEdit?.id,
                      name,
                      email,
                      phone,
                      categories: JSON.stringify(selectedCategories),
                    })}
                    title="Atualizar Contato"
                  />
                </>
              )
            }
            {
              isEdit === false && (
              <Button
                loading={loadingContacts}
                onClick={() => createContact({
                  name,
                  email,
                  phone,
                  categories: JSON.stringify(selectedCategories),
                })}
                title="Cadastrar"
              />
              )
            }
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
