export default function AnimeDetail({ selectedAnime }) {
    if (!selectedAnime) {
        return <p>No anime selected</p>;
    }

    return (
        <div className="anime-details">
            {selectedAnime.images && selectedAnime.images.jpg ? (
                <img src={selectedAnime.images.jpg.image_url} alt={selectedAnime.title} />
            ) : (
                <p>No image available</p>
            )}
            <div className="anime-info">
                <h2>{selectedAnime.title}</h2>
                <div className="anime-meta">
                    <p><strong>Rank:</strong> {selectedAnime.rank || "N/A"}</p>
                    <p><strong>Year:</strong> {selectedAnime.year || "N/A"}</p>
                    <p><strong>Score: </strong>{selectedAnime.score || "N/A"}</p>
                    <p><strong>Episodes:</strong> {selectedAnime.episodes || "N/A"}</p>
                    <p><strong>Type: </strong>{selectedAnime.type || "N/A"}</p>
                    <p><strong>Genres:</strong> {selectedAnime.genres.map((genre) => genre.name).join(', ') || "N/A"}</p>
                </div>
                <p>{selectedAnime.synopsis || "No synopsis available"}</p>
            </div>


        </div>
    );
}
