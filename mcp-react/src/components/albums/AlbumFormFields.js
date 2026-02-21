import React from "react";

const AlbumFormFields = ({
  album,
  onChange,
  onSubmit,
  onCancel
}) => {
  return (
    <div className="container page-content py-4">
      <form onSubmit={onSubmit}>

        <h2 className="text-end mb-4">
          Update Album
        </h2>

        <hr />

        {/* Artist */}
        <div className="form-group mb-4">
          <label className="form-label">Artist</label>
          <input
            type="text"
            name="artist"
            className="form-control"
            value={album.artist}
            onChange={onChange}
            required
          />
        </div>

        {/* Album Title */}
        <div className="form-group mb-4">
          <label className="form-label">Album</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={album.title}
            onChange={onChange}
            required
          />
        </div>

        {/* Release Year */}
        <div className="form-group mb-4">
          <label className="form-label">Release Year</label>
          <input
            type="number"
            name="release_year"
            className="form-control"
            value={album.release_year}
            onChange={onChange}
            required
          />
        </div>

        {/* Artwork URL */}
        <div className="form-group mb-4">
          <label className="form-label">Artwork URL</label>
          <input
            type="url"
            name="artwork_url"
            className="form-control"
            value={album.artwork_url}
            onChange={onChange}
          />
        </div>

        <hr className="my-4" />

        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-sm btn-primary">
            Save Changes
          </button>

          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={onCancel}
          >
            Cancel Changes
          </button>
        </div>

      </form>
    </div>
  );
};

export default AlbumFormFields;