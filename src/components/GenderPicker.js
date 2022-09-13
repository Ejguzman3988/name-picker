import React from 'react'
import styled from 'styled-components'
import Gender from './Gender'

const GenderPicker = () => {
  const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  `
  
  return (
    <Div>
      <Gender gender="boy"/>
      <Gender gender="girl"/>
    </Div>
  )
}

export default GenderPicker