export default function AnimeList({ animes, onSelectedAnime }) {
    return (
        <ul>
            {animes.map((anime) => (
                <li key={anime.mal_id} onClick={() => onSelectedAnime(anime.mal_id)}>
                    {anime.images && anime.images.jpg ? (
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                    ) : (
                        <p>No image available</p>
                    )}
                    <h3>{anime.title}</h3>
                    <p>Score: {anime.score || "N/A"}</p>
                </li>
            ))}
        </ul>
    );
}
