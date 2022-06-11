import React, { useEffect, useRef } from 'react'
import Lottie from 'react-lottie-player'
import { OverlayLoader } from './styled'
import lottieJson from './loader.json'

interface iLoader {
  open: boolean
}

export const Loader: React.FC<iLoader> = ({ open }) => {
  if (open === false) {
    return <></>
  }

  return (
    <OverlayLoader>
      <Lottie
        loop
        animationData={lottieJson}
        style={{ width: 1280, height: 720 }}
      />
    </OverlayLoader>
  )
}
