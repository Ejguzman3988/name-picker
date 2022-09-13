import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const NameGenerator = () => {
  const { gender } = useParams();

  const Container = styled.div`
    display: flex;
    font-size : clamp(2rem, 10vw, 5rem);
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    background-color: ${() => "var(--"+gender+")"};
  `

  const Div = styled.div`
  `

  return (
    <Container>
      <Div>NameGenerator</Div>
    </Container>
  )
}

export default NameGenerator