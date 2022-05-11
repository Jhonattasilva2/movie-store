import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

export default function Content() {
  const [cardMovies, setCardMovies] = useState([]);
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardMovies(data.results);
      });
  }, []);

  return (
    <Container>
      {cardMovies.length > 0 &&
        cardMovies.map((movie) => <Card key={movie.id} {...movie} />)}
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
