import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import styled from 'styled-components'
import Card from './Card'

export default function Content() {
    const { cardMovies } = useContext(ApiContext)

    return (
        <Container>
            {cardMovies.length > 0 &&
                cardMovies.map((movie) => <Card key={movie.id} {...movie} />)}
        </Container>
    )
}

const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
