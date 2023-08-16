import { css } from "@emotion/css";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

type MovieListProps = {};
const textWithFirstTwoLinesStyle = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const textWithOneLinesStyle = css`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export interface Root {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MovieList: FC<MovieListProps> = () => {
  const [list, setList] = useState<Result[]>([]);
  const [searchList, setSearchList] = useState<Result[]>([]);
  const searchedData = useSelector(
    (state: RootState) => state.searchData.value
  );
  const navigate = useNavigate();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWNmOGU2MTk3ZGM1YmYyZDA1M2E1ZGI4ZGZhZmYzYSIsInN1YiI6IjY0ZGM4ODE2YTNiNWU2MDEzOWZmZmEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwGyB3t1sJjoaHi2cg9psOeVzrS4AG9HihR3cmKcfOY"
      }
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setList(response.results);
        setSearchList(response.results);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    if (searchedData) {
      let result = list.filter((f) =>
        f.title.toLowerCase().includes(searchedData.toLowerCase())
      );
      setSearchList(result);
    }
    if (searchedData === "") {
      setSearchList(list);
    }
  }, [searchedData]); // eslint-disable-line

  const MovieDetails = (id: number) => {
    navigate(`details/${id}`);
  };

  return (
    <>
      <Row>
        {searchList?.map((item, inx) => {
          return (
            <Col md="3.5" xs="2">
              <Card
                className=" my-2 shadow overflow-hidden"
                key={inx}
                onClick={() => MovieDetails(item.id)}
              >
                <img
                  alt="Sample"
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                />
                <CardBody>
                  <div className="d-flex justify-content-between">
                    <CardTitle className={textWithOneLinesStyle} tag="h6">{item.title}</CardTitle>
                    <div>({item.vote_average})</div>
                  </div>
                  <CardText className={textWithFirstTwoLinesStyle}>
                    {item.overview}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default MovieList;
