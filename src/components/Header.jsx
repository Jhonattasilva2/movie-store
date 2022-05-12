import React from "react";
import styled from "styled-components";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import logo from "../img/M.png";

export default function Header() {
  return (
    <HeaderComponent>
      <Link href="#">
        <Image src={logo} alt="logo" />
      </Link>
      <Input placeholder="Pesquisar" />
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

const Input = styled.input`
  width: 30%;
  height: 30px;
  background: url("https://cdn-icons.flaticon.com/png/512/2319/premium/2319177.png?token=exp=1652327685~hmac=7dd07072fb398b62e3ff5727aa795bb7")
    no-repeat;
  background-size: contain;
  background-position: right;
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

  @media (max-width: 380px) {
    background: none;
    background-color: #fff;
  }
`;

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
`;
const Cart = styled(FaShoppingCart)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: #000;
  }
`;
