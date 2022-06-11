import { iTypeButton } from '@src/Interfaces'
import { Colors } from '@src/Styles/Colors'
import styled from 'styled-components'

interface iButton {
  marginTop?: number
  marginLeft?: number
  marginBottom?: number
  marginRight?: number
  type?: iTypeButton
}

export const SimpleButton = styled.button<iButton>`
  ${({ marginTop = '' }) => !!marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginBottom = '' }) => !!marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft = '' }) => !!marginLeft && `margin-left: ${marginLeft}px;`}
  ${({ marginRight = '' }) => !!marginRight && `margin-right: ${marginRight}px;`}
  background: ${({ type = 'success' }) => Colors[type]};
  height: 50px;
  padding: 0 20px;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    background: ${({ type = 'success' }) => Colors[`${type}Hover`]};
  }
`
