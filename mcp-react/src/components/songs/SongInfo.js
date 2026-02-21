import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SongInfo = ({ song }) => {
  return (
    <>
      {song.artwork_url && (
        <div className="d-flex justify-content-center my-4">
          <img
            src={song.artwork_url}
            alt={song.album_title}
            className="img-fluid rounded"
            style={{ maxWidth: "320px" }}
          />
        </div>
      )}

      <div className="song-header text-center mb-4">
        <h2>"{song.song_title}"</h2>
        <p><small>by:</small> {song.artist}</p>
        <p>
          <small>ALBUM:</small> <strong>{song.album_title}</strong>&nbsp; - &nbsp;
          <small>RELEASE YEAR:</small> <strong>{song.release_year}</strong>&nbsp; - &nbsp;
          <small>GENRE:</small> <strong>{song.genre}</strong>&nbsp; - &nbsp;
          <small>INTERPRETATION:</small> <strong>{song.theme_name}</strong>
        </p>
        <p>
          <a className="btn btn-sm btn-outline-success" href={song.streaming_url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "spotify"]} /> Listen on Spotify
          </a>
        </p>
      </div>
    </>
  );
};

export default SongInfo;
