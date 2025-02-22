export default function AnimeList({ animes, onSelectedAnime }) {
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
