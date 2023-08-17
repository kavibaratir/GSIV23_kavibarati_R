import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path={"/list"} element={<MovieList/>} />
      <Route path={"details/:id"} element={<MovieDetails />} />
    </Routes>
  );
};

export default Views;

