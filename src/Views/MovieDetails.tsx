import { css } from "@emotion/css";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardTitle } from "reactstrap";
import { Card, CardBody, CardText, Col, Row } from "reactstrap";

type MovieDetailsProps = {};
export interface Root {
  id: number;
  cast: Cast[];
  crew: Crew[];
}
const positiontoCardimage = css`
  margin-left: 1%;
  margin-right  : 1%;
  position:absoute;
`;
const positiontoCardDescription = css`
  margin-top: 1%;
  position:relative;
  margin-bottom  : 1%;
  margin-right  : 1%;
`;
const rateStyle=css`
  color:#9B9B9B;
  margin-top:-3%
`
export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}

const MovieDetails: FC<MovieDetailsProps> = () => {
  let { id } = useParams();
  const [director, setDirector] = useState("");
  const [length, setLength] = useState("");
  const [year, setYear] = useState("");
  const [cast, setCast] = useState<Cast[]>([]);
  const [actor, setActor] = useState("");
  const [coactor, setCoActor] = useState("");
  const [overview, setOverview] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWNmOGU2MTk3ZGM1YmYyZDA1M2E1ZGI4ZGZhZmYzYSIsInN1YiI6IjY0ZGM4ODE2YTNiNWU2MDEzOWZmZmEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IwGyB3t1sJjoaHi2cg9psOeVzrS4AG9HihR3cmKcfOY"
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        let {
          release_date,
          runtime,
          overview,
          backdrop_path,
          title,
          vote_average
        } = response;
        setYear(release_date);
        setLength(runtime);
        setOverview(overview);
        setUrl(backdrop_path);
        setRating(vote_average);
        setTitle(title);
      })
      .catch((err) => console.error(err));

    //get cast

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCast(response.cast);
        let actors = response.cast.map((item: Cast) => item.name);
        let [actor, coactor] = actors;
        setActor(actor);
        setCoActor(coactor);
        let res = response.crew.find((f: Crew) => f.job === "Director");
        setDirector(res.name);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="d-flex">
        <Col md="3" xs="2" className={positiontoCardimage}>
          <Card
            className=" my-2 shadow overflow-hidden"

          >
            <img className='center' alt="Sample" src={`https://image.tmdb.org/t/p/original${url}`} /></Card>

        </Col>
        <Card className={'detail-card '+positiontoCardDescription}>
          <Col md="12" xs="8" >
            <CardBody>
              <CardTitle tag="h6">{title}
                <span className={rateStyle}>     ({rating})</span></CardTitle>           
              <CardText >
              
                  <div className="d-flex justify-content-between">
                    <span >{year}  |  {length}  |  {director}  |</span>
                  </div>
                
              </CardText>
              <CardText>
                <div>
                  Cast: {actor}, {coactor}...
                </div>
                <div>Description: {overview}</div>

              </CardText>
            </CardBody>
          </Col>
        </Card>
        
{/* 
        <div className="d-flex justify-content">
          <h5>{title}</h5>
          <span>({rating})</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="pl-2">{year}|</span>
          <span className="px-2">{length}|</span>
          <span className="px-2">{director}|</span>
        </div>
        <div>
          cast: {actor},{coactor}...
        </div>
        <div>Description:{overview}</div> */}
      </div>
     
    </>
  );
};

export default MovieDetails;
