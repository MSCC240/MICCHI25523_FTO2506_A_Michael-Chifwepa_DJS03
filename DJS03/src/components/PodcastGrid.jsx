import PodcastCard from "./PodcastCard.jsx";

export default function PodcastGrid({ podcasts, genres, onSelectPodcast }) {
  return (
    <div className="grid">
      {podcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          podcast={podcast}
          genres={genres}
          onSelectPodcast={onSelectPodcast}
        />
      ))}
    </div>
  );
}
