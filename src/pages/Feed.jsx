import SideBar from "../components/Sidebar";
import { useContext, useEffect } from "react";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";
import { getThemeClasses } from "../utils/helpers";

const Feed = () => {
const {videos, showDarkMode } = useContext(YoutubeContext);

useEffect(() => {
    document.body.style.color = showDarkMode ? 'white' : 'black';
    document.body.style.backgroundColor = showDarkMode ? '#01323C' : 'white';
    return () => {
      document.body.style.color = '';
      document.body.style.backgroundColor = '';
    };
  }, [showDarkMode]);


    return ( 
        <div className={`flex min-h-[100vh] mx-4 ${getThemeClasses(showDarkMode)}`}>
            <SideBar />
            <div className="feed w-full">
                {!videos ? (<Loading/>): (videos.map((item) => {
                if (item.type !== "video") return;
                    return <VideoCard  key={item.video.videoId} video ={item.video}/>;
                })
                )}             
            </div>
        </div>
    );
}
 
export default Feed;