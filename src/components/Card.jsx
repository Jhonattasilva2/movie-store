import {useState} from 'react'
import styled from "styled-components";
import { FaHeart, FaStar } from "react-icons/fa";

export default function Card({title, release_date, vote_average, poster_path,}) {
  const [like, setLike] = useState(false)
  

  return (
    <CardDiv>
      <Like like={like} onClick={() => like === false ? setLike(true) : setLike(false)}/>
      <Image
        src={"https://image.tmdb.org/t/p/w1280/" + poster_path}
        alt={title}
      />
      <Date>{release_date}</Date>
      <MovieTitle>{title}</MovieTitle>
      <Info>
        <Star /> {vote_average} - Gênero
      </Info>
      <Info> {`R$ ${Math.floor(Math.random() * 89)},99`}</Info>
      <Button>Adicionar</Button>
    </CardDiv>
  );
}

const CardDiv = styled.div`
  max-width: 200px;
  min-height: 450px;
  margin: 2rem;
  border: 1px solid #c3cfd9;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.03);
  }
`;

const Like = styled(FaHeart)`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${(props) => props.like ? "#ff0000" : "#4b5c6b"};;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    color: #ff0000;
  }
`;

const Image = styled.img`
  max-width: 200px;
  object-fit: contain;
`;

const Date = styled.span`
  text-align: center;
  color: #fff;
  position: absolute;
  bottom: 35%;
`;

const MovieTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  text-align: center;
`;

const Info = styled.span`
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
`;

const Star = styled(FaStar)`
  color: #4b5c6b;
  margin-right: 0.2rem;
`;

const Button = styled.button`
  width: 100%;
  height: 2rem;
  border: none;
  background-color: #6558f5;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.4s;

  &:hover {
    background-color: #4f47bc;
  }
`;
