import styled, { keyframes } from 'styled-components'

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`

export const Container = styled.div`
  display: ${props => props.display};
  position: absolute;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;  
  background-image: linear-gradient(#48A6E2 70%, #367EAC);  
  width: 380px;
  height: 450px;
  z-index: 2000;
  border-radius: 10px;
`

export const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`