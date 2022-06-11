import { useCategoriesContext } from '@src/Contexts/Categories.context'
import { iCategory } from '@src/Interfaces'
import { Box, Container } from '@src/Styles'
import { useRouter } from 'next/router'
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

  const { query, push: pushRouter } = useRouter()

  useEffect(() => {
    if (!categories.length) {
      searchCategories()
    }
  }, [])

  const filterById = (category: iCategory) => {
    const newQuery = { ...query }

    newQuery.categories = [
      ...newQuery.categories as string[] ?? [],
      `${category.id}`,
    ]

    pushRouter({
      pathname: '/',
      query: newQuery,
    })
  }

  const removeFilter = (category: iCategory) => {
    const newQuery: any = { ...query }

    if (Array.isArray(newQuery.categories)) {
      newQuery.categories = newQuery?.categories?.filter(
        (id: string) => `${category.id}` !== id,
      )
    } else {
      delete newQuery.categories
    }

    pushRouter({
      pathname: '/',
      query: newQuery,
    })
  }

  return (
    <Box background="primary" width="100%">
      <Container>
        <Box
          paddingY="30px 20"
          paddingX="10px 20"
          display="flex"
          flexWrap="wrap"
        >
          <Category
            className={openCreateCategory ? 'active' : ''}
            onClick={() => setOpenCreateCategory(!openCreateCategory)}
          >
            <FiPlus fontSize={20} />
          </Category>

          {
            !!categories.length && categories.map((category) => (
              <Category
                key={category.id}
                className={query?.categories?.includes(`${category.id}`) ? 'active' : ''}
                onClick={() => (
                  query?.categories?.includes(`${category.id}`)
                    ? removeFilter(category)
                    : filterById(category)
                )}
              >
                { category.value }
              </Category>
            ))
          }
        </Box>
      </Container>
    </Box>
  )
}
