import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'

export default function SearchInput() {
    const { SearchMovies } = useContext(ApiContext)

    return (
        <InputForm onSubmit={SearchMovies}>
            <Input placeholder='Pesquisar' name='filme' />
            <Button>
                <SearchIcon />
            </Button>
        </InputForm>
    )
}

const InputForm = styled.form`
    display: inline-block;
    width: 30%;
    position: relative;
`

const SearchIcon = styled(FaSearch)`
`

const Input = styled.input`
    width: 100%;
    height: 30px;
    background-color: #fff;
    border: 2px solid #9eadba;
    border-radius: 0.2rem;
    padding-left: 0.5rem;
    transition: all 0.4s;

    &:hover {
        border: 2px solid #000;
    }

    &::placeholder {
        color: #9eadba;
        font-size: 1rem;
    }
`

const Button = styled.button`
position: absolute;
bottom: 0;
right: -7px;
padding: 0;
font-size: 1.5rem;
border: none;
background-color: transparent;
color: #9eadba;
cursor: pointer;
transition: all 0.4s ease;

&:hover {
    color: #000;
}

@media (max-width: 380px) {
        display: none;
    }
`
