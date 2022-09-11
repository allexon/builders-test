import React, { useState, useEffect } from 'react'
import { Container, Circle } from './styles'

const Loader = () => {

  const [display, setDisplay] = useState('flex')

  useEffect(() => {
    fnUpdateDisplay()
  }, [])

  const fnUpdateDisplay = () => {
    setTimeout(() => {
        setDisplay('none')
    }, 3000)
  }

  return (
    <Container display={display}>
      <Circle delay="0s" />
      <Circle delay=".1s" />
      <Circle delay=".2s" />
    </Container>
  )
}

export default Loader