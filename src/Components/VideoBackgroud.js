export const VideoBackground = ({ trailer }) => {
  const videoId = trailer.split("v=")[1];

  return (
    <div className="w-full ">
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      {/* <video src={trailer} width="560" height="315"></video> */}
    </div>
  );
};
