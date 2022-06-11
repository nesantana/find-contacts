import { useCategoriesContext } from '@src/Contexts/Categories.context'
import { Box, Container } from '@src/Styles'
import React, { useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Category } from './styled'

export const Categories: React.FC<any> = () => {
  const {
    openCreateCategory,
    setOpenCreateCategory,
    searchCategories,
    loadingCategories,
    categories,
  } = useCategoriesContext()

  useEffect(() => {
    if (!categories.length) {
      searchCategories()
    }
  }, [])

  return (
    <Box background="primary" width="100%">
      <Container>
        <Box
          paddingY={30}
          paddingX={20}
          display="flex"
        >
          <Category
            className={openCreateCategory ? 'active' : ''}
            onClick={() => setOpenCreateCategory(!openCreateCategory)}
          >
            <FiPlus fontSize={20} />
          </Category>
        </Box>
      </Container>
    </Box>
  )
}
