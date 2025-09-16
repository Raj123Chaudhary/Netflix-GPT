import { useSelector } from "react-redux";
import { MoviesList } from "./MoviesList";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //   console.log(movies.topRatedMovies);
  //   const topRatedMovie = movies.topRatedMovies;
  return (
    <div className="bg-black">
      <div className="-mt-80 relative z-30">
        <MoviesList movies={movies.topRatedMovies} tittle={"TopRatedMovies"} />
        <MoviesList movies={movies.topRatedMovies} tittle={"TopRatedMovies"} />
        <MoviesList movies={movies.topRatedMovies} tittle={"TopRatedMovies"} />
        <MoviesList movies={movies.topRatedMovies} tittle={"TopRatedMovies"} />
        <MoviesList movies={movies.topRatedMovies} tittle={"TopRatedMovies"} />
      </div>

      {/* 
      -movies list *n
       -Movies card*n
       */}
    </div>
  );
};
