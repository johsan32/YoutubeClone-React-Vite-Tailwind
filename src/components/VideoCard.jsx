import millify from "millify";
import { Link } from "react-router-dom";
import { ImFeed } from "react-icons/im";

const VideoCard = ({ video }) => {
  const totalSeconds = video.lengthSeconds;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  let result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  if (hours > 0) {
    result = `${padTo2Digits(hours)}:${result}`;
  }
 
  return (
    <Link to={`/watch/${video.videoId}`}>
      <div className="relative">
        <img
          className="rounded-lg w-full"
          src={
            video.thumbnails[1]
              ? video.thumbnails[1].url
              : video.thumbnails[0].url
          }
        />
        <p
          className={`absolute right-2 bottom-2 p-1 rounded ${
            video.isLiveNow !== true ? "bg-[#0A5666]  text-white " : ""
          }`}
        >
          {video.isLiveNow !== true ? (
            result
          ) : (
            <span className="flex items-center bg-red-700 text-white p-1 rounded">
              <ImFeed className="me-1" /> Canlı
            </span>
          )}
        </p>
      </div>
      <div className="flex-col items-center justify-center flex-wrap gap-4 mt-1 w-full ">
        <h6 className="font-medium text-sm">
          {video.title.length > 90
            ? `${video.title.substring(0, 90)}...`
            : video.title}
        </h6>
        <div className="flex gap-3 items-center">
          <img
            className="rounded-full w-12 h-12"
            src={video.author.avatar[0].url}
          />
          <div className="flex-col ">
            <p>{video.author.title}</p>
            <div className="flex gap-3 ">
              <p className={video.stats.views !== undefined ? "" : "hidden"}>
                {video.stats.views !== undefined
                  ? millify(video.stats.views)
                  : ""}
              </p>
              <p className={video.publishedTimeText === undefined
                  ? "hidden"
                  : ""}>
                {video.publishedTimeText && video.publishedTimeText} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
