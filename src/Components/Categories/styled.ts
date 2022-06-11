import { Colors } from '@src/Styles/Colors'
import styled from 'styled-components'

interface iCategory {
  small?: boolean
  negative?: boolean
}

export const Category = styled.div<iCategory>`
  min-width: 50px;
  height: ${({ small = false }) => (small ? 'auto' : '50px')};
  padding: ${({ small = false }) => (small ? '10px' : '0 15px')};
  margin-right: 30px;
  margin-bottom: 20px;
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
`
