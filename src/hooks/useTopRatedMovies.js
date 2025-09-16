import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedmovies } from "../Utils/moviesSlice";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const url = "https://imdb236.p.rapidapi.com/api/imdb/top250-movies";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "53c0f523f7msh4d215931da6f8e1p19a82djsn804135ac20b6",
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    },
  };
  const topRatedMovie = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addTopRatedmovies(json));

    console.log(json);
  };
  useEffect(() => {
    topRatedMovie();
  }, []);
};
export default useTopRatedMovies;
