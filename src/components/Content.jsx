import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import styled from 'styled-components'
import Card from './Card'
import Alert from './Alert'

export default function Content() {
    const { cardMovies, alert } = useContext(ApiContext)

    return (
        <Container>
            {alert && <Alert/>}
            {cardMovies.map((movie) => {
                    return (
                    <Card key={movie.id} {...movie}  />
                )})}
        </Container>
    )
}

const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
`
