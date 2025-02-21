export default function AnimeDetail({ selectedAnime }) {
    if (!selectedAnime) {
        return <p>No anime selected</p>;
    }

    return (
        <div className="anime-detail">
            {selectedAnime.images && selectedAnime.images.jpg ? (
                <img src={selectedAnime.images.jpg.image_url} alt={selectedAnime.title} />
            ) : (
                <p>No image available</p>
            )}
            <h2>{selectedAnime.title}</h2>
            <p>{selectedAnime.synopsis || "No synopsis available"}</p>
            <p>Year: {selectedAnime.year || "N/A"}</p>
            <p>Score: {selectedAnime.score || "N/A"}</p>
        </div>
    );
}
