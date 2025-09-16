import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { Header } from "./Header";
import { MainContainer } from "./MainContainer.js";
import { SecondaryContainer } from "./SecondaryContainer";

export const Browse = () => {
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
                  Main Container
                   -Video part
                   -thumbnail and overview part
                  Secondary Container
                  - Movies List *n
                  - Movies Card *n
          */}
    </div>
  );
};
