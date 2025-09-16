import { useSelector } from "react-redux";
import { VideoBackground } from "./VideoBackgroud";
import { VideoTittle } from "./VideoTittle";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.topRatedMovies);

  if (!movies) return;
  const mainMovie = movies[4];
  const { originalTitle, description, trailer } = mainMovie;

  return (
    <div className=" ">
      <VideoTittle tittle={originalTitle} description={description} />
      <VideoBackground trailer={trailer} />
    </div>
  );
};
