import { Colors } from '@src/Styles/Colors'
import styled from 'styled-components'

export const Category = styled.div`
  min-width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.white};
  border-radius: 10px;
  color: ${Colors.white};
  cursor: pointer;

  &:hover,
  &.active {
    color: ${Colors.primary};
    background: ${Colors.white};
  }

  svg {
    transition: 0s;
  }
`
