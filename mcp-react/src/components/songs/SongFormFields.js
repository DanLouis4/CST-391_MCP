import React from "react";
import "../../css/Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SongFormFields = ({
  song,
  isEditing,
  onChange,
  onSubmit,
  onCancel
}) => {
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <section className="page-content py-4">

          <div className="d-flex flex-column text-center mb-lg-5">
            <button
              type="button"
              className="btn btn-sm btn-outline-success mb-3 align-self-start"
              onClick={onCancel}
            >
              <FontAwesomeIcon icon="chevron-left" /> Back to Songs
            </button>

            <h2 className="mb-0">
              {isEditing ? "Update Song" : "Create New Song"}
            </h2>
          </div>

          <div className="row">
            {/* Column A */}
            <div className="col-md-6">

              <div className="form-group mb-3">
                <label className="form-label">Song Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="song_title"
                  value={song.song_title}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Album</label>
                <input
                  type="text"
                  className="form-control"
                  name="album_title"
                  value={song.album_title}
                  onChange={onChange}
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Lyrics</label>
                <textarea
                  className="form-control"
                  rows="15"
                  name="lyrics"
                  value={song.lyrics}
                  onChange={onChange}
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Genre</label>
                <input
                  type="text"
                  className="form-control"
                  name="genre"
                  value={song.genre}
                  onChange={onChange}
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Streaming URL</label>
                <input
                  type="url"
                  className="form-control"
                  name="streaming_url"
                  value={song.streaming_url}
                  onChange={onChange}
                />
              </div>

            </div>

            {/* Column B */}
            <div className="col-md-6">

              <div className="form-group mb-3">
                <label className="form-label">Artist</label>
                <input
                  type="text"
                  className="form-control"
                  name="artist"
                  value={song.artist}
                  onChange={onChange}
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Release Year</label>
                <input
                  type="number"
                  className="form-control"
                  name="release_year"
                  value={song.release_year}
                  onChange={onChange}
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Notes</label>
                <textarea
                  className="form-control"
                  rows="15"
                  name="notes"
                  value={song.notes}
                  onChange={onChange}
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Theme</label>
                <select
                  className="form-select"
                  name="theme_id"
                  value={song.theme_id || ""}
                  onChange={onChange}
                  required
                >
                  <option value="" disabled>-- Select a theme --</option>
                  <option value="1">Explicit — Direct Christian language and theology</option>
                  <option value="2">Implicit — Indirect Christian values or themes</option>
                  <option value="3">Interpretive — Christian meaning derived through analysis</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Video URL</label>
                <input
                  type="url"
                  className="form-control"
                  name="video_url"
                  value={song.video_url}
                  onChange={onChange}
                />
              </div>

            </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
              <div className="form-group mb-3">
              <label className="form-label">Album Artwork URL</label>
              <input
                type="url"
                className="form-control"
                name="artwork_url"
                value={song.artwork_url}
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <hr className="my-4" />

          <div className="d-flex justify-content-end gap-2">
            <button type="submit" className="btn btn-sm btn-outline-primary">
              Save {isEditing ? "Changes" : "Song"}
            </button>

            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={onCancel}
            >
              Cancel {isEditing ? "Changes" : "Song"}
            </button>
          </div>

        </section>
      </form>
    </div>
  );
};

export default SongFormFields;