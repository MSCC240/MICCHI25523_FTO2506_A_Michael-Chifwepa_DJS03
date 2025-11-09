import { formatDate } from "../utils/formatDate.js";

export default function PodcastCard({ podcast, genres, onSelectPodcast }) {
  const genreSpans = podcast.genres.map((id) => {
    const match = genres.find((genre) => genre.id === id);
    return (
      <span key={id} className="tag">
        {match ? match.title : `Unknown (${id})`}
      </span>
    );
  });

  return (
    <div className="card" onClick={() => onSelectPodcast(podcast)}>
      <img src={podcast.image} alt={podcast.title} />
      <h3>{podcast.title}</h3>
      <p className="seasons">{podcast.seasons} seasons</p>
      <div className="tags">{genreSpans}</div>
      <p className="updated-text">Updated {formatDate(podcast.updated)}</p>
    </div>
  );
}

