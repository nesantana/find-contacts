import { useCategoriesContext } from '@src/Contexts/Categories.context'
import {
  Box, Container, Input,
} from '@src/Styles'
import React, { useState } from 'react'
import { Button } from '../Button'

export const CreateCategory: React.FC<any> = () => {
  const [value, setValue] = useState('')

  const {
    openCreateCategory,
    createCategory,
    loadingCategories,
  } = useCategoriesContext()

  if (openCreateCategory === false) {
    return <></>
  }

  return (
    <Box background="underlayPrimary">
      <Container>
        <Box paddingY={60} paddingX={20}>
          <p>Criar categoria</p>

          <Box marginTop={20} display="flex">
            <Input
              placeholder="Nome"
              value={value}
              onChange={({ target }) => setValue(target.value)}
            />

            <Button
              marginLeft={20}
              loading={loadingCategories}
              onClick={() => createCategory(value)}
              title="Cadastrar"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
