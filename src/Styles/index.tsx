import styled, { keyframes } from 'styled-components'
import { BiLoaderAlt } from 'react-icons/bi'
import { iMarginsOptions } from '@src/Interfaces'
import { Colors } from './Colors'

export const Container = styled.div`
  max-width: 100%;
  width: 770px;
  margin: auto;
  display: block;
`
interface iBox extends iMarginsOptions {
  background?: string
  color?: string
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
  top?: string
  bottom?: string
  left?: string
  right?: string
  flexWrap?: string
  cursor?: string
  shadow?: boolean
  maxWidth?: string | number | 'auto'
  overflow?: string
}

export const Box = styled.div<iBox>`
  ${({ overflow = '' }) => !!overflow && `overflow: ${overflow};`}
  ${({ shadow = '' }) => !!shadow && 'box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);'}
  ${({ cursor = '' }) => !!cursor && `cursor: ${cursor};`}
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
  ${({ color = 'text' }) => `color: ${(color.includes('#') ? color : Colors[color])};`}
  display: ${({ display = 'block' }) => display};
  position: ${({ position = 'relative' }) => position};
  width: ${({ width = 'auto' }) => (width === 'auto' || width === 0 ? 'auto' : `${width}px`)};
  max-width: ${({ maxWidth = 'auto' }) => (maxWidth === 'auto' || maxWidth === 0 ? 'auto' : `${maxWidth}px`)};
  height: ${({ height = 'auto' }) => (height === 'auto' || height === 0 ? 'auto' : `${height}px`)};
  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  align-self: ${({ alignSelf = 'auto' }) => alignSelf};
  padding: ${({ paddingY = 0, paddingX = 0 }) => `${paddingY}px ${paddingX}px`};
  border-radius: ${({ borderRadius = 0 }) => `${borderRadius}px`};
  z-index: 1;
`

interface iInput extends iMarginsOptions {
  noBorder?: boolean
  paddingLeft?: string
}

export const Input = styled.input<iInput>`
  ${({ marginTop = '' }) => !!marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginBottom = '' }) => !!marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft = '' }) => !!marginLeft && `margin-left: ${marginLeft}px;`}
  ${({ marginRight = '' }) => !!marginRight && `margin-right: ${marginRight}px;`}
  border: ${({ noBorder = false }) => (noBorder ? '0px' : `1px solid ${Colors.negative}`)};
  padding: 0 20px;
  ${({ paddingLeft = '' }) => !!paddingLeft && `padding-left: ${paddingLeft};`}
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

export const IconRotate = styled(BiLoaderAlt)<iMarginsOptions>`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  ${({ marginTop = '' }) => !!marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginBottom = '' }) => !!marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginLeft = '' }) => !!marginLeft && `margin-left: ${marginLeft}px;`}
  ${({ marginRight = '' }) => !!marginRight && `margin-right: ${marginRight}px;`}
`
