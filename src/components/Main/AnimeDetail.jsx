import { useEffect, useRef } from "react";

export default function AnimeDetail({ selectedAnime, loading, error }) {
    const detailRef = useRef(null); // Buat referensi ke elemen detail

    useEffect(() => {
        if (selectedAnime && detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [selectedAnime]); // Efek ini akan dijalankan setiap kali anime terpilih berubah

    if (loading) return <p className="loading-details">Loading......</p>;
    if (!selectedAnime) return <p className="no-anime-select">No anime selected</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div className="anime-details" ref={detailRef}>  {/* Tambahkan ref di sini */}
            {selectedAnime.images?.jpg ? (
                <img src={selectedAnime.images.jpg.image_url} alt={selectedAnime.title} />
            ) : (
                <p>No image available</p>
            )}
            <div className="anime-info">
                <h2>{selectedAnime.title}</h2>
                <div className="anime-meta">
                    <p><strong>Rank </strong>: {selectedAnime.rank || "N/A"}</p>
                    <p><strong>Year</strong>: {selectedAnime.year || "N/A"}</p>
                    <p><strong>Score</strong>:{selectedAnime.score || "N/A"}</p>
                    <p><strong>Episodes</strong>: {selectedAnime.episodes || "N/A"}</p>
                    <p><strong>Type</strong>:{selectedAnime.type || "N/A"}</p>
                    <p><strong>Genres</strong>: {selectedAnime.genres?.map((genre) => genre.name).join(', ') || "N/A"}</p>
                </div>
                <p className="synopsis">{selectedAnime.synopsis || "No synopsis available"}</p>
            </div>
        </div>
    );
}
