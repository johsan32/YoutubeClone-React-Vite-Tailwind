import { Link } from "react-router-dom";

const Playlist= ({ playlist }) => {

  console.log(playlist);
  return (
    <Link to={`/watch/${playlist.playlistId}`}>
      <div className="flex mt-2 items-center">
          <p>detail</p>
        </div>
    </Link>
  );
};

export default Playlist;
