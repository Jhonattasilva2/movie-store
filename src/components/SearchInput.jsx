import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

export default function SearchInput() {
    const { SearchMovies } = useContext(ApiContext)

  return (
    <InputForm onSubmit={SearchMovies}>
      <Input
        placeholder="Pesquisar"
        name='filme'
      />
      <SearchIcon />
    </InputForm>
  );
}

const InputForm = styled.form`
  display: inline-block;
  width: 30%;
  position: relative;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 1.5rem;
  position: absolute;
  right: -10px;
  bottom: 5px;
  color: #9eadba;

  @media (max-width: 380px) {
    display: none;
  }
`;

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
`;
