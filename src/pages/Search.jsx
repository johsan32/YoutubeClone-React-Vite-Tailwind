import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { getData, getThemeClasses } from "../utils/helpers";
//import VideoCard from "../components/VideoCard";
import SideBar from "../components/Sidebar";
import Loading from "../components/Loading";
import SearchPlay from "../components/SearchPlay";
import { YoutubeContext } from './../context/youtubeContext';

const Search = () => {
  const [params, setParams] = useSearchParams();
  const [results, setResults] = useState(null);
  const { showDarkMode, setShowDarkMode } = useContext(YoutubeContext);

  const query = params.get("search_query");


  useEffect(() => {
    setResults(null);
    getData(`https://youtube138.p.rapidapi.com/search/?q=${query}`).then(
      (data) => setResults(data)
    );
  }, [query]);

  const handleClick = () => {
    setParams({ search_query: results.didYouMean });
  };


  return (
    <div className={`flex gap-3 min-h[100vh] ${getThemeClasses(showDarkMode)} `}>
      <SideBar />
      <div className="flex flex-col gap-3 w-full ps-10 mt-3">        
          <p onClick={handleClick} className="cursor-pointer">
            Şunun için sonuçlar gösteriliyor: <span  className="font-bold mx-3">{query}</span>
            {results?.didYouMean && (
            <span className="font-bold mx-3">
              Bunun yerine şunu ara:
              {results?.didYouMean}
            </span> 
           )}
          </p>
      
        {!results ? (
          <Loading />
        ) : (
          results.contents.map((item, i) => {
            if (item.type !== "video") return;
            //console.log(item);
            return <SearchPlay key={i} video={item.video} />;
          })
        )}
      </div>
    </div>
  );
};

export default Search;
