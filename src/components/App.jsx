import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Search from './Navbar/Search';
import NumResult from './Navbar/NumResult';
import Main from './Main/Main';
import Box from './Main/Box';
import AnimeList from './Main/AnimeList';
import AnimeDetail from './Main/AnimeDetail';

export default function App() {
  const [animes, setAnimes] = useState([]); // State untuk data anime
  const [selectedAnime, setSelectedAnime] = useState(null); // State untuk anime yang dipilih
  const [query, setQuery] = useState(''); // State untuk pencarian
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk menangani error

  // Fungsi untuk mengambil data dari API
  useEffect(() => {
    async function fetchAnimes() {

      setError(null);

      try {
        setLoading(true);
        const response = await fetch('https://api.jikan.moe/v4/anime');
        if (!response.ok) throw new Error('Failed to fetch anime data');

        const data = await response.json();
        setAnimes(data.data); // Set data dari API ke state
        setSelectedAnime(data.data[null]); // Pilih anime pertama secara default
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    }

    fetchAnimes();
  }, []);
  //fungsi untuk menangani pencarian dengan debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(query);
    }, 500); //delay 500ms agar tidak terlalu sering update

    return () => clearTimeout(timer); //cleanup timer jika user mengetik cepat
  }, [query]);
  // Fungsi untuk menangani pencarian
  function handleSearch(query) {
    setQuery(query);
  }

  // Filter anime berdasarkan query
  const filteredAnimes = animes.filter((anime) =>
    anime.title.toLowerCase().includes(query.toLowerCase())
  );

  // Fungsi untuk menangani anime yang dipilh 
  function handleSelectedAnime(id) {
    const selected = animes.find((anime) => anime.mal_id === id);
    setSelectedAnime(selected);
  }

  return (
    <>
      <Navbar>
        <Search onSearch={handleSearch}>
          <NumResult animes={filteredAnimes} />
        </Search>
      </Navbar>
      <Main>
        <Box>
          <AnimeList animes={filteredAnimes} onSelectedAnime={handleSelectedAnime} query={query} loading={loading} />
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime} error={error} loading={loading} />
        </Box>
      </Main>
    </>
  );
}








// function SelectedBox({selectedAnime}) {
//   const [isOpen2, setIsOpen2] = useState(true);                            sudah dipindah ke Box untuk mencegah drilling
//   return (
//         <div className="box">
//           <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
//             {isOpen2 ? '–' : '+'}
//           </button>
//           {isOpen2 && <AnimeDetail selectedAnime ={selectedAnime} />}
//         </div>
//   );
// }

