import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid.jsx";
import { genres } from "./data.js";
import { fetchpodcasts } from "./api/fetchpodcast.js";
import Header from "./components/Header.jsx";
import Modal from "./components/modal.jsx";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  useEffect(() => {
    fetchpodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <>
      <Header />
      <main>
        {loading && (
          <div className="message-container">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        )}
        {error && (
          <div className="message-container">
            <div className="error">
              Error occurred while trying to fetch podcasts: {error}
            </div>
          </div>
        )}
        {!loading && !error && (
          <PodcastGrid
            podcasts={podcasts}
            genres={genres}
            onSelectPodcast={setSelectedPodcast}
          />
        )}
      </main>

      <Modal podcast={selectedPodcast} onClose={() => setSelectedPodcast(null)} genres={genres} />
    </>
  );
}
