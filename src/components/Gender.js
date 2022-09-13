import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Gender = ({gender}) => {
  const StyledLink = styled(Link)`
    font-size : clamp(2rem, 10vw, 5rem);
    border: black solid;
    font-weight: 800;
    padding: 18% 15%;
    text-decoration: none;
    color: black;
    background-color: ${() => "var(--"+ gender +")"};
  `

  const symbol = gender === "boy" ? "♂" : "♀";
  
  return (
    <StyledLink to={`/${gender}`}>{symbol}</StyledLink>
  )
}

export default Gender