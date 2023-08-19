import { BiLike, BiDislike } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { RiQuillPenLine } from "react-icons/ri";
import StringArea from "./StringArea";
import { TiTick } from "react-icons/ti";
import { LuArrowUpNarrowWide, LuArrowDownWideNarrow } from "react-icons/lu";
import { useState} from "react";


const Comments = ({ comments }) => {
  const [sortOrder, setSortOrder] = useState("desc"); 
  const handleClick = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  return (
    <div className="mt-5 ">
      <div className="flex items-center gap-20 font-medium">
        <div className="flex gap-3">
          <h2 className="font-bold"> {comments.length}</h2>
          <span>Yorum</span>
        </div>
        <div className="flex">
          <div className="flex text-xl">
            {sortOrder === "desc" ? (
              <LuArrowDownWideNarrow />
            ) : (
              <LuArrowUpNarrowWide />
            )}
          </div>
          <span className="cursor-pointer " onClick={handleClick}>
            Sıralama Ölçütü
          </span>
        </div>
      </div>
      <div className="flex items-center my-3">
        <div className="flex p-3 items-center border rounded-full me-3">
          <RiQuillPenLine className="text-2xl" />
        </div>
        <div className="flex flex-col outline-none border-none w-[90%] ">
          <p>Yorum ekleyin...</p>
          <div className="border mb-3"></div>
        </div>
      </div>
      {comments.map((comment) => (
        <ul key={comment.id}>
          <li className="flex gap-2 mt-5">
            <img
              className="rounded-full w-12 h-12"
              src={comment.author.avatar[0].url}
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex mb-1 gap-2 items-center">
                <p className="text-md flex">
                  {comment.author.title}
                  {comment.pinned.status === true && (
                    <span className="text-red-500 text-xl">
                      <TiTick />
                    </span>
                  )}
                </p>
                <span className="text-sm">{comment.publishedTimeText}</span>
              </div>
              <div className="flex text-sm mb-1">
                <StringArea text={comment.content} max={100} />
              </div>
              <div className="flex items-center">
                <div className="flex gap-2 items-center pr-3 border-r-2 border-white">
                  <BiLike />
                  <span>{comment.stats.votes}</span>
                </div>
                <div className="pl-2 pe-7">
                  <BiDislike />
                </div>
                <button className="p-1 rounded-lg border">Yanıtla</button>
              </div>
              <div
                className={`flex items-center ms-52 ${
                  comment.stats.replies !== 0
                    ? "text-blue-400 cursor-pointer"
                    : ""
                } `}
              >
                <AiFillCaretDown />
                <span
                  className={`${
                    comment.stats.replies !== 0
                      ? "text-blue-400 cursor-pointer hover:bg-slate-600 rounded-lg p-2"
                      : ""
                  }`}
                >
                  {comment.stats.replies}{" "}
                  <span className={`ps-2`}>Reply</span>{" "}
                </span>
              </div>
            </div>
          </li>
          <h3></h3>
        </ul>
      ))}
    </div>
  );
};

export default Comments;
