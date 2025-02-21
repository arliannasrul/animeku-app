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

  // Fungsi untuk mengambil data dari API
  useEffect(() => {
    async function fetchAnimes() {
      try {
        const response = await fetch('https://api.jikan.moe/v4/anime');
        const data = await response.json();
        setAnimes(data.data); // Set data dari API ke state
        setSelectedAnime(data.data[0]); // Pilih anime pertama secara default
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    }

    fetchAnimes();
  }, []);

  // Fungsi untuk menangani pencarian
  function handleSearch(query) {
    setQuery(query);
  }

  // Filter anime berdasarkan query
  const filteredAnimes = animes.filter((anime) =>
    anime.title.toLowerCase().includes(query.toLowerCase())
  );

  // Fungsi untuk menangani anime yang dipilih
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
          <AnimeList animes={filteredAnimes} onSelectedAnime={handleSelectedAnime} />
        </Box>
        <Box>
          <AnimeDetail selectedAnime={selectedAnime} />
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

