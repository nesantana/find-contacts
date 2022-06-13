import { Colors } from '@src/Styles/Colors'
import styled from 'styled-components'

interface iCategory {
  small?: boolean
  negative?: boolean
  fontSize?: number | string
  noMarginBottom?: boolean
}

export const Category = styled.div<iCategory>`
  min-width: 50px;
  height: ${({ small = false }) => (small ? 'auto' : '50px')};
  padding: ${({ small = false }) => (small ? '10px' : '0 15px')};
  margin-right: ${({ small = false }) => (small ? '20px' : '30px')};
  ${({ fontSize = '' }) => !!fontSize && `font-size: ${fontSize}px;`}
  ${({ noMarginBottom }) => !noMarginBottom && 'margin-bottom: 20px;'}
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ negative = false }) => (negative ? Colors.text : Colors.white)};
  border-radius: 10px;
  color: ${({ negative = false }) => (negative ? Colors.text : Colors.white)};
  cursor: pointer;

  &:hover,
  &.active {
    color: ${({ negative = false }) => (negative ? Colors.white : Colors.primary)};
    background: ${({ negative = false }) => (negative ? Colors.text : Colors.white)};
  }

  svg {
    transition: 0s;
  }


  @media screen and (max-width: 1200px) {
    padding: 10px;
    height: auto;
    font-size: 10px;
    margin: 0 10px 10px 0;

    svg {
      font-size: 10px;
    }
  }
`
