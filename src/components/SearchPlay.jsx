import millify from "millify";
import { Link } from "react-router-dom";
import { ImFeed } from "react-icons/im";
import { BsCircleFill } from "react-icons/bs";

const SearchPlay = ({ video }) => {
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
      <div className="flex items-center feed">
        <div className="relative ">
          <img
            className="rounded-lg w-full"
            src={
              video.thumbnails[1]
                ? video.thumbnails[1].url
                : video.thumbnails[0].url
            }
          />
          <p
            className={`absolute right-2 bottom-2 p-1 text-md rounded ${
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
        <div className="flex-col items-center justify-stretch text-lg flex-wrap gap-2 mt-1 p-2 ">
          <h6 className="flex font-sans text-xl font-medium">
            {video.title.length > 150
              ? `${video.title.substring(0, 150)}...`
              : video.title}
          </h6>
          <div className="flex gap-2 text-md font-light">
                <p className={video.stats.views !== undefined ? "" : "hidden"}>
                  {video.stats.views !== undefined
                    ? millify(video.stats.views)
                    : ""}
                </p>
                <span className="flex items-center text-xs"><BsCircleFill /> </span>
                <p
                  className={
                    video.publishedTimeText === undefined ? "hidden" : ""
                  }
                >
                  {video.publishedTimeText && video.publishedTimeText}
                </p>
              </div>

          <div className="flex gap-3 items-center mt-3">
            <img
              className="rounded-full w-16 h-16"
              src={video.author.avatar[0].url}
            />
            <div className="flex-col text-md title">
              <p className="capitalize">{video.author.title.length > 15
              ? `${video.author.title.substring(0, 15)}...`
              : video.author.title}</p>
            </div>
          
          </div>
            <div>
              <p className="text-xs mt-2 ">{video.descriptionSnippet}</p>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchPlay ;
