import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import millify from "millify";
import moment from "moment/moment";
import "moment/locale/tr";
import StringArea from "./StringArea";
import Comments from "./Comments";
import { TiTick } from "react-icons/ti";

const PlayDetail = ({ detail, comments }) => {

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold p-3">{detail.title}</h2>
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-3">
            <img
              className="rounded-full w-12 h-12"
              src={detail.author.avatar[0].url}
              alt=""
            />
            <div>
              <h4 className="flex ">
                {detail.author.title}
                {detail.author.badges[0]?.text === "Doğrulandı" && (
                  <span className="text-red-500 text-2xl">
                    <TiTick />
                  </span>
                )}
              </h4>
              <p>{detail.author.stats.subscribersText}</p>
            </div>
            <button className=" rounded-full px-3 py-2 transition ms-5 bg-black text-white hover:bg-[#bebebe]">
              Abone Ol
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex items-center rounded-full py-1 px-2 text-l cursor-pointer border  hover:bg-[#bebebe]">
              <div className="flex gap-2 items-center pr-2 border-r-2 border-white">
                <BiLike className="text-2xl" />
                <span>{millify(detail.stats.likes)}</span>
              </div>
              <div className="pl-2  text-2xl">
                <BiDislike />
              </div>
            </div>
            <div className="flex items-center gap-2  ms-3 rounded-full py-1 px-6 text-l border  cursor-pointer hover:bg-[#bebebe]">
              <PiShareFatThin />
              <p>Paylaş</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#24313d] text-white p-2 mt-2 cursor-pointer rounded-lg hover:bg-[#1d1a44] hover:text-white">
        <div className="flex gap-3">
          <p>Görüntülenme {millify(detail.stats.views)}</p>
          <p>{moment(detail.publishedDate).fromNow()}</p>
          <ul className="flex gap-3">
            {detail.superTitle.items.slice(0, 3).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <StringArea text={detail.description} max={200} />
      </div>
      <div>
        <Comments comments={comments} />
      </div>
    </>
  );
};

export default PlayDetail;
