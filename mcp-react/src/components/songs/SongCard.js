import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const SongCard = ({ song }) => {
  const navigate = useNavigate();
  const imageSrc = song.artwork_url ? song.artwork_url : "/no-image-available.png";

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 shadow-sm">
        {/* Card Image */}
        <img
          src={imageSrc}
          alt={song.song_title}
          className="img-fluid"
          style={{ maxWidth: "100%" }}
        />

        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{song.song_title}</h5>

          <h6 className="card-subtitle mb-3 text-muted">{song.artist}</h6>

          <div className="mt-auto d-flex justify-content-end gap-2">
            {/* View */}
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() => navigate(`/songs/${song.song_id}`)}
              title="View"
              state={{ from: "Songs"}}
            >
              View <FontAwesomeIcon icon={["fas", "eye"]} />
            </button>

            {/* Edit */}
            <button
              type="button"
              className="btn btn-sm btn-outline-success"
              onClick={() => navigate(`/songs/edit/${song.song_id}`)}
              title="Edit"
            >
              Edit <FontAwesomeIcon icon={["fas", "edit"]} />
            </button>

            {/* Delete */}
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              title="Delete"
              onClick={() => navigate(`/songs/delete/${song.song_id}`)}
            >
              Delete <FontAwesomeIcon icon={["fas", "trash"]} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
