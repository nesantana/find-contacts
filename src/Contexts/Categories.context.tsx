import { iCategory } from '@src/Interfaces'
import { api, urls } from '@src/Services/Api'
import React, { useContext, createContext, useState } from 'react'

interface iCategoriesContext {
  openCreateCategory: boolean
  setOpenCreateCategory(bool: boolean): void
  loadingCategories: boolean
  setLoadingCategories(bool: boolean): void
  searchCategories(): void
  createCategory(value: string): void
  categories: any[]
}

export const CategoriesContext = createContext({} as iCategoriesContext)

export const useCategoriesContext = () => useContext(CategoriesContext)

export const CategoriesProvider: React.FC<any> = ({ children }) => {
  const [openCreateCategory, setOpenCreateCategory] = useState<boolean>(false)
  const [loadingCategories, setLoadingCategories] = useState<boolean>(false)
  const [categories, setCategories] = useState<iCategory[]>([])

  const searchCategories = async () => {
    setLoadingCategories(true)

    try {
      const { data } : any = await api.get(urls.categories.find)

      setCategories(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingCategories(false)
    }
  }

  const createCategory = async (value: string) => {
    setLoadingCategories(true)

    try {
      await api.post(urls.categories.create, { value })
    } catch (error) {
      console.error(error)
    } finally {
      setOpenCreateCategory(false)
      searchCategories()
    }
  }

  return (
    <CategoriesContext.Provider value={{
      openCreateCategory,
      setOpenCreateCategory,
      loadingCategories,
      setLoadingCategories,
      searchCategories,
      createCategory,
      categories,
    }}
    >
      { children }
    </CategoriesContext.Provider>
  )
}
