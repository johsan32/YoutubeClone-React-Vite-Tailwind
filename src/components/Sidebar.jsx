import { categories } from "../utils/constants";
import { useContext } from "react";
import { YoutubeContext } from "../context/youtubeContext";

const SideBar = () => {
  const { selectCategory, setSelectCategory, showSidebar } =
    useContext(YoutubeContext);

  return (
    <div
      className={`flex flex-col me-6 mt-10 ${
        showSidebar === true ? "w-12 text-3xl items-center me-5" : "w-44 "
      }`}
    >

      {categories.map((item, i) => (

        <div key={i}>
          <div onClick={() => setSelectCategory(item)} key={i}>
            {showSidebar !== true ? (
              <div
                className={` ${
                  selectCategory.name === item.name &&
                  (item.type === "category" || item.type === "home") &&
                  "bg-slate-400"
                }
              flex gap-2 items-center p-2 py-2 rounded-lg text-1xl cursor-pointer`}
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ) : (
              (item.type === "category" || item.type === "home") && (
                <div
                  className={` ${
                    selectCategory.name === item.name && "bg-slate-600"
                  }
            flex flex-col items-center p-2 py-2 rounded-lg text-sm cursor-pointer`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              )
            )}
            {item.divider && <hr />}
          </div>
        </div> 
      ))}
    </div>
 
  );
};

export default SideBar;
