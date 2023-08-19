import { createContext, useState, Children, useEffect } from "react";
import axios from "axios";
import { options } from "../utils/constants";

export const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [selectCategory, setSelectCategory] = useState({
    name: "Anasayfa",
    type: "category",
  });
  const [videos, setVideos] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDarkMode, setShowDarkMode] = useState(true);

  useEffect(() => {
    setVideos(null);
    if (selectCategory.type === "category") {
      fetchCategory(selectCategory.name);
    }
  }, [selectCategory]);

  const fetchCategory = (category) => {
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
      .then((res) => setVideos(res.data.contents))
      .catch((err) => console.log(err));
  };

  return (
    <YoutubeContext.Provider
      value={{
        selectCategory,
        setSelectCategory,
        videos,
        showSidebar,
        setShowSidebar,
        showDarkMode,
        setShowDarkMode,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
