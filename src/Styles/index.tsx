import styled, { keyframes } from 'styled-components'
import { BiLoaderAlt } from 'react-icons/bi'
import { Colors } from './Colors'

export const Container = styled.div`
  max-width: 100%;
  width: 770px;
  margin: auto;
  display: block;
`
interface iBox {
  background?: string
  display?: 'block' | 'inline-block' | 'flex'
  borderRadius?: string | number
  border?: string
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  alignItems?: 'stretch' | 'flex-start' | 'center' | 'baseline'
  alignSelf?: 'auto' | 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end'
  justifyContent?: 'space-between' | 'space-araund' | 'flex-start' | 'flex-end' | 'center' | 'space-evenly'
  height?: string | number
  width?: string | 'auto' | number
  paddingY?: string | number
  paddingX?: string | number
  flex?: string | number
  flexGrow?: string | number
  position?: string
  top?: number
  bottom?: number
  left?: number
  right?: number
  marginTop?: number
  marginLeft?: number
  marginBottom?: number
  marginRight?: number
  flexWrap?: string
}

export const Box = styled.div<iBox>`
  ${({ top = '' }) => !!top && `top: ${top};`}
  ${({ bottom = '' }) => !!bottom && `bottom: ${bottom};`}
  ${({ left = '' }) => !!left && `left: ${left};`}
  ${({ right = '' }) => !!right && `right: ${right};`}
  ${({ flex = '' }) => !!flex && `flex: ${flex};`}
  ${({ flexGrow = '' }) => !!flexGrow && `flex-grow: ${flexGrow};`}
  ${({ marginTop = '' }) => !!marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginBottom = '' }) => !!marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft = '' }) => !!marginLeft && `margin-left: ${marginLeft}px;`}
  ${({ marginRight = '' }) => !!marginRight && `margin-right: ${marginRight}px;`}
  ${({ flexWrap = '' }) => !!flexWrap && `flex-wrap: ${flexWrap};`}
  ${({ border = '' }) => !!border && `border: ${border};`}
  ${({ background = 'transparent' }) => `background: ${(background.includes('#') || background === 'transparent' ? background : Colors[background])};`}
  display: ${({ display = 'block' }) => display};
  position: ${({ position = 'relative' }) => position};
  width: ${({ width = 'auto' }) => (width === 'auto' || width === 0 ? 'auto' : `${width}px`)};
  height: ${({ height = 'auto' }) => (height === 'auto' || height === 0 ? 'auto' : `${height}px`)};
  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  align-self: ${({ alignSelf = 'auto' }) => alignSelf};
  padding: ${({ paddingY = 0, paddingX = 0 }) => `${paddingY}px ${paddingX}px`};
  border-radius: ${({ borderRadius = 0 }) => `${borderRadius}px`};
  z-index: 1;
`

export const Input = styled.input`
  border: 1px solid ${Colors.negative};
  padding: 0 20px;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  background: transparent;
`

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

interface iIconRotate {
  marginTop?: number
  marginLeft?: number
  marginBottom?: number
  marginRight?: number
}

export const IconRotate = styled(BiLoaderAlt)<iIconRotate>`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  ${({ marginTop = '' }) => !!marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginBottom = '' }) => !!marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft = '' }) => !!marginLeft && `margin-left: ${marginLeft}px;`}
  ${({ marginRight = '' }) => !!marginRight && `margin-right: ${marginRight}px;`}
`
