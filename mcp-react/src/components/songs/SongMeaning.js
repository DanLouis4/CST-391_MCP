const SongMeaning = ({ notes }) => {
  if (!notes) return null;

  return (
    <section className="notes-text mb-4 border-bottom border-dark pb-2">
      <h3>Notes</h3>
      <p>{notes}</p>
    </section>
  );
};

export default SongMeaning;
