import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SongCard from "./SongCard";

const SongList = ({ songList }) => {

  return (
    <>
      <div className="container page-content py-4">
        <h2 className="mb-4">Songs</h2>

        <div className="row g-3">
          {songList.map((song) => (
            <SongCard key={song.song_id} song={song} />
          ))}
        </div>
      </div>

      {/* Floating + button */}
      <Link
        to="/songs/new"
        className="create-song-fab"
        aria-label="Create new song"
        title="Create new song"
      >
       <FontAwesomeIcon icon={["fas", "plus"]} size="sm" />
      </Link>
    </>
  );
};

export default SongList;
