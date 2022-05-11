import React from 'react'
import styled from 'styled-components'
import loading from '../img/loading.gif'

export default function Footer() {
  return (
    <LoadingIcon src={loading} alt="Loading..."/>
  )
}

const LoadingIcon = styled.img`
max-width: 30px;
display: block;
margin: 0 auto;
padding: 2rem;

`
