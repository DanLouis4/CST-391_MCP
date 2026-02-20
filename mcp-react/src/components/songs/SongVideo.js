const SongVideo = ({ videoUrl }) => {
  if (!videoUrl) return null;

  // convert watch?v= to embed/
  const embedUrl = videoUrl.includes("watch?v=")
    ? videoUrl.replace("watch?v=", "embed/")
    : videoUrl;

  return (
    <section className="mt-4">
      <h3>Music Video</h3>
      <div className="ratio ratio-16x9">
        <iframe
          src={embedUrl}
          title="Music Video"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default SongVideo;
