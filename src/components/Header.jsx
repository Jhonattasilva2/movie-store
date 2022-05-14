import SearchInput from "./SearchInput";
import styled from "styled-components";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import logo from "../img/film-strip.png";

export default function Header() {
  return (
    <HeaderComponent>
      <Link href="#">
        <Image src={logo} alt="logo" />
      </Link>
      <SearchInput/>
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
  max-width: 30px;
  padding: 5px;
 
`;

const Link = styled.a`
  line-height: 100%;
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
