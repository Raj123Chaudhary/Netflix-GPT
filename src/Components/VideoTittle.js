export const VideoTittle = ({ tittle, description }) => {
  return (
    <div className=" p-12 aspect-video bg-gradient-to-r from-black absolute text-white">
      <h1 className="text-5xl font-bold mt-40 mb-4 ">{tittle} </h1>
      <p className="text-lg w-1/4"> {description} </p>
      <div className="gap-3 flex mt-4">
        <button className="bg-white text-black text-bold  px-6 py-3 rounded-md">
          Play
        </button>
        <button className="bg-gray-500 px-6 py-3 rounded-md">More Info</button>
      </div>
    </div>
  );
};
