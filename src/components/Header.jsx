import React from "react";
import styled from "styled-components";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../img/M.png";

export default function Header() {
  return (
    <HeaderComponent>
      <Link href="#">
        <Image src={logo} alt="logo" />
      </Link>
      <InputDiv>
        <SearchIcon />
        <Input placeholder="Pesquisar" />
      </InputDiv>
      <Icons>
        <Like />
        <Cart />
      </Icons>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  width: 100%;
  background-color: #8dd7cf;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0px;
  z-index: 100;
`;

const Image = styled.img`
  max-width: 50px;
`;

const Link = styled.a`
  line-height: 100%;
`;

const InputDiv = styled.div`
  display: inline-block;
  width: 30%;
  position: relative;
`

const SearchIcon = styled(FaSearch)`
  font-size: 1.5rem;
  position: absolute;
  right: -10px;
  bottom: 5px;
  color: #9eadba;

  @media (max-width: 380px) {
    display: none;
  }
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

const Icons = styled.div``;

const Like = styled(FaHeart)`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: #ff0000;
  }
`

const Cart = styled(FaShoppingCart)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: #000;
  }
`
