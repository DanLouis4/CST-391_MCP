import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataSource from "../../data/dataSource";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SongInfo from "./SongInfo";
import SongLyrics from "./SongLyrics";
import SongMeaning from "./SongMeaning";
import SongVideo from "./SongVideo";


const SongDetails = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const fromPage = location.state?.from;

  useEffect(() => {
    const loadSong = async () => {
      try {
        const response = await dataSource.get(`/songs/${id}`);
        console.log("Song API response:", response.data);
        setSong(response.data[0]);
    } catch (error) {
      console.error("Error loading song:", error);
    }
  };

  loadSong();
}, [id]);

  if (!song) {
    return (
      <div className="container text-center page-content py-4">
        <h4>Song not found...</h4>
      </div>
    );
  }

  return (
    <section className="bg-light page-content py-4 mb-4">
      <div className="container mt-4">

        <button
        className="btn btn-sm btn-outline-success mb-3"
        onClick={() =>
            navigate(fromPage === "Albums" ? "/albums" : "/songs")
        }
        >
        <FontAwesomeIcon icon={["fas", "chevron-left"]} />{" "}
        Back to {fromPage === "Albums" ? "Albums" : "Songs"}
        </button>


        <h3 className="text-center border-bottom border-dark pb-2">
          Song Details
        </h3>

        <SongInfo song={song} />

        <hr />

        <div className="row">
          <div className="col-md-6">
            <SongLyrics lyrics={song.lyrics} />
          </div>

          <div className="col-md-6">
            <SongMeaning notes={song.notes} />
            <SongVideo videoUrl={song.video_url} />
          </div>
        </div>
        <hr className="my-4" />
      </div>

      {/* Edit and Back Buttons */}
      <div className="container">
        <div className="d-flex justify-content-between gap-2">
            <button className="btn btn-sm btn-outline-success mb-3" onClick={() => navigate(fromPage === "Albums" ? "/albums" : "/songs")}>
              <FontAwesomeIcon icon={["fas", "chevron-left"]} />{" "}Back to {fromPage === "Albums" ? "Albums" : "Songs"}
            </button>

            <div className="d-flex align-items-end gap-2">
            {/* Edit */}
            <button
              type="button"
              className="btn btn-md btn-outline-success mb-3"
              onClick={() => navigate(`/songs/edit/${song.song_id}`)}
              title="Edit"
            >
              Edit <FontAwesomeIcon icon={["fas", "edit"]} />
            </button>

            {/* Delete */}
            <button
              type="button"
              className="btn btn-md btn-outline-danger mb-3"
              onClick={() => navigate(`/songs/delete/${song.song_id}`)}
              title="Delete"
            >
              Delete <FontAwesomeIcon icon={["fas", "trash"]} />
            </button> 
            </div>
        </div>
      </div>
  </section>
  );
};

export default SongDetails;
