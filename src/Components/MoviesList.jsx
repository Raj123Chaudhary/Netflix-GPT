import { MoviesCard } from "./MoviesCard";

export const MoviesList = ({ movies, tittle }) => {
  //   console.log(movies, tittle);
  return (
    <div>
      <div className="p-6 ">
        <h1 className="text-3xl text-white font-medium mb-2 ">{tittle}</h1>
        <div className="flex w-full overflow-x-scroll">
          {movies?.map((movie, index) => {
            //   console.log(index, movie);
            return <MoviesCard poster={movie.primaryImage} />;
          })}
        </div>
      </div>
    </div>
  );
};
