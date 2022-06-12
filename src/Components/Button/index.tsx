import React from 'react'
import { Box, IconRotate } from '@src/Styles'
import { iTypeButton } from '@src/Interfaces'
import { SimpleButton } from './styled'

interface iButton {
  type?: iTypeButton
  marginLeft?: number
  loading?: boolean
  onClick(): void
  title: string
}

export const Button: React.FC<iButton> = ({
  type = 'success',
  marginLeft = 0,
  loading = false,
  onClick = () => {},
  title = 'Button',
}) => (
  <SimpleButton type={type as any} marginLeft={marginLeft} onClick={onClick}>
    <Box display="flex" justifyContent="center" alignItems="center" color="white">
      { title }

      { loading && <IconRotate fontSize="20px" /> }
    </Box>
  </SimpleButton>
)
