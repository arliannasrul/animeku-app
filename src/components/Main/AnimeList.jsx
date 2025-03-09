export default function AnimeList({ animes, onSelectedAnime, loading, error, query }) {
    if (loading) return <p className="loading-anime-list">Loading anime list...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (query && animes.length === 0) return <p className="no-anime">No anime found.</p>;
    return (
        <ul className="anime-list">
            {animes.map((anime) => (
                <li className="anime-detail" key={anime.mal_id} onClick={() => onSelectedAnime(anime.mal_id)}>
                    {anime.images && anime.images.jpg ? (
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                    ) : (
                        <p>No image available</p>
                    )}
                    <h3 className="heading-anime">{anime.title}</h3>
                    <p>Score: {anime.score || "N/A"}</p>
                    <p>Genres: {anime.genres.map((genre) => genre.name).join(', ') || "N/A"}</p>

                </li>
            ))}
        </ul>
    );
}
