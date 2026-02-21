import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AlbumCard = ({
  album,
  toggleSongs,
  isExpanded,
  songs
}) => {

  const navigate = useNavigate();

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 shadow-sm">

        {/* Image */}
        <img
          src={
            album.artwork_url
              ? album.artwork_url
              : "/no-image-available.png"
          }
          alt={album.title}
          className="img-fluid"
          style={{ maxWidth: "100%" }}
        />

        <div className="card-body d-flex flex-column">

          {/* Title */}
          <h5 className="card-title">
            {album.title}
            <small className="fs-6">
              {" "}({album.release_year})
            </small>
          </h5>

          <h6 className="card-subtitle mb-3 text-muted">
            {album.artist}
          </h6>

          {/* Buttons */}
          <div className="mt-auto d-flex justify-content-end gap-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() => toggleSongs(album.album_id)}
            >
              Songs <FontAwesomeIcon icon={["fas", "music"]} />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-success"
              onClick={() => navigate(`/albums/edit/${album.album_id}`)}
            >
              Edit <FontAwesomeIcon icon={["fas", "edit"]} />
            </button>
            </div>
            
          {/* Collapsible Song List */}
          {isExpanded && (
            <div className="mt-2 border-top pt-2 text-end">
              <ul className="list-unstyled mb-0">
                {songs && songs.length > 0 ? (
                  songs.map((song) => (
                    <li key={song.song_id}>
                      <small>
                          <Link
                            to={`/songs/${song.song_id}`}
                            state={{ from: "Albums" }}
                            className="text-decoration-none"
                          >
                            {song.song_title}
                          </Link>
                      </small>
                    </li>
                  ))
                ) : (
                  <li className="text-muted fst-italic text-center py-2">
                    <div>No songs found for this album.</div>
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-danger mt-2"
                        onClick={() => navigate(`/albums/delete/${album.album_id}`)}>
                          Delete Album
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
