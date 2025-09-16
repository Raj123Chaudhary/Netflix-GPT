export const MoviesCard = ({ poster }) => {
  return (
    <div className="w-48 pl-2 shrink-0 ">
      <img className="w-fit" src={poster} alt="poster img" />
    </div>
  );
};
