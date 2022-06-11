import { Box } from '@src/Styles'
import React from 'react'
import { FiSmartphone } from 'react-icons/fi'
import { TitleLogo } from './styled'

export const Header: React.FC<any> = () => (
  <Box paddingY={30} display="flex" justifyContent="center">
    <FiSmartphone size={20} />

    <TitleLogo>
      Find
      {' '}
      <span>Contacts</span>
    </TitleLogo>
  </Box>
)
