import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getData, getThemeClasses } from "../utils/helpers";
import ReactPlayer from "react-player";
import Loading from "../components/Loading";
import PlayDetail from "../components/PlayDetail";
import DetailRight from "../components/DetailRight";
import SideBar from "../components/Sidebar";
import { YoutubeContext } from './../context/youtubeContext';
import Playlist from './../components/Playlist';


const VideoDetail = () => {
  const { videoId } = useParams();
  const [detail, setDetail] = useState(null);
  const [relateds, setRelateds] = useState(null);
  const [comments, setComments] = useState(null);
  const { showDarkMode, setShowDarkMode} = useContext(YoutubeContext);

  useEffect(() => {
    setDetail(null);
    setRelateds(null);

    getData(`/details/?id=${videoId}`).then((data) => setDetail(data));

    getData(`/related-contents/?id=${videoId}`).then((data) =>
      setRelateds(data.contents)
    );

    getData(`/comments/\?id=${videoId}`).then((data) =>
      setComments(data.comments)
    );
  }, [videoId]);

  return (
    <div className={`flex gap-3 min-h[95vh] ${getThemeClasses(showDarkMode)} `}>
      <div className="ms-2">
        <SideBar />
      </div>
      <div className="mt-9 ">
        <ReactPlayer

          width={"100%"}
          height={"450px"}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          playing={true}
        />
        {!detail ? (
          <Loading />
        ) : (
          <PlayDetail detail={detail} comments={comments} />
        )}
      </div>
      <div className="mt-8">
      { !relateds
          ? "..."
          : relateds.map((item) =>{
            item.playlist &&
            <Playlist 
            key={item.playlist.playlistId} 
            playlist={item.playlist} />;
            
          })} 
        {!relateds
          ?  <Loading />
          : relateds.map((item) => {
              if (item.type !== "video") return;
              return <DetailRight key={item.video.videoId} video={item.video} />;
            })}
      </div>
    </div>
  );
};

export default VideoDetail;
