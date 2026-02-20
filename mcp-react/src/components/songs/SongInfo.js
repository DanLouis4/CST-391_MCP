const SongInfo = ({ song }) => {
  return (
    <>
      {song.artwork_url && (
        <div className="text-center my-4">
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
        <p>{song.artist}</p>
        <p>
          {song.album_title} - {song.release_year} - {song.genre}
        </p>
        <p>
          <a href={song.streaming_url} target="_blank" rel="noreferrer">
            Streaming Link
          </a>{" "}
          - {song.theme_name}
        </p>
      </div>
    </>
  );
};

export default SongInfo;
