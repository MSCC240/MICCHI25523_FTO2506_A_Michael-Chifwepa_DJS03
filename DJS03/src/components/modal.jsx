export default function Modal({ podcast, onClose }) {
  if (!podcast) return null; // Don't render if nothing is selected

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="title-section">
          <h2>{podcast.title}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="banner">
          <img src={podcast.image} alt={podcast.title} className="modal-img" />
          <div className="info-section">
            <h3>Description</h3>
            <p>{podcast.description}</p>

            <h3>Genres</h3>
            <div className="tags">
              {podcast.genres?.map((id) => (
                <span key={id} className="tag">
                  {id}
                </span>
              ))}
            </div>

            <p className="modal-updated-text">
              Updated: {new Date(podcast.updated).toLocaleDateString()}
            </p>
          </div>
        </div>

        <h3>Seasons</h3>
        <ul className="season-list">
          {podcast.seasons?.length ? (
            podcast.seasons.map((season, index) => (
              <li key={index} className="season-item">
                <span>{season.title || `Season ${index + 1}`}</span>
                <span className="episodes">
                  {season.episodes?.length
                    ? `${season.episodes.length} episodes`
                    : "No episodes"}
                </span>
              </li>
            ))
          ) : (
            <p>No season data available.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
