import { SiYoutube } from "react-icons/si";
import { ImYoutube2 } from "react-icons/im";
import { LuBellRing } from "react-icons/lu";
import { BsFillMicFill } from "react-icons/bs";
import { BsChevronBarDown, BsChevronBarUp } from "react-icons/bs";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { YoutubeContext } from "../context/youtubeContext";
import { getThemeClasses } from "../utils/helpers";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const {
    showSidebar,
    setShowSidebar,
    showDarkMode,
    setShowDarkMode,
    selectCategory,
  } = useContext(YoutubeContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/results?search_query=${event.target[0].value}`);
    event.target[0].value = "";
  };
  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  const handleClickDarkMode = () => {
    setShowDarkMode(!showDarkMode);
  };

  return (
    <header
      className={`flex justify-between items-center px-8 border-b ${getThemeClasses(
        showDarkMode
      )}`}
    >
      <div className="flex items-center">
        <p
          className={`flex items-center text-2xl pe-2 cursor-pointer ${getThemeClasses(
            showDarkMode
          )}`}
          onClick={handleClick}
        >
          {showSidebar === true ? <BsChevronBarUp /> : <BsChevronBarDown />}
        </p>
        <Link to={"/"} className="flex items-center gap-3">
          <ImYoutube2
            className={`text-6xl ${
              showDarkMode === true ? "text-white" : "text-[#f00]"
            }`}
          />
          <img
            className="w-12 h-8"
            src="https://100numaraliadam.com/wp-content/uploads/2020/02/dalgali-turk-bayragi-6.gif"
            alt=""
          />
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white rounded border"
        >
          <input
            className="rounded px-2 text-black outline-none shadow-stone-300"
            placeholder="arama..."
            type="text"
          />
          <button className=" text-[#f00] pe-1">
            <SiYoutube className="text-3xl" />
          </button>
        </form>
        <div className="border p-2 rounded-full hover:bg-[#bbb8b8]">
          <BsFillMicFill className="text-2xl rounded-full" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border px-2 rounded-lg hover:bg-[#bbb8b8]">
          <FaRegUserCircle />
          <p>Oturum aç</p>
        </div>
        <LuBellRing className="text-2xl" />
        <div
          className="flex items-center text-2xl cursor-pointer"
          onClick={handleClickDarkMode}
        >
          {showDarkMode === true ? (
            <MdOutlineNightlight />
          ) : (
            <MdOutlineLightMode />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
