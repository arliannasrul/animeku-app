import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Search from './Navbar/Search';
import NumResult from './Navbar/NumResult';
import Main from './Main/Main';
import Box from './Main/Box';
import AnimeList from './Main/AnimeList';
import AnimeDetail from './Main/AnimeDetail';


const animesData = [
  {
    mal_id: 21,
    title: 'One Piece',
    year: 1999,
    image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    score: 8.71,
    synopsis:
      'Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.',
  },
  {
    mal_id: 20,
    title: 'Naruto',
    year: 2002,
    image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
    score: 8.71,
    synopsis:
      "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
  },
  {
    mal_id: 269,
    title: 'Bleach',
    year: 2004,
    image: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
    score: 8.71,
    synopsis:
      "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant.",
  },
  {
    mal_id: 31964,
    title: 'Boku no Hero Academia',
    year: 2016,
    image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    score: 8.71,
    synopsis:
      'The appearance of "quirks", newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
  },
];

export default function App() {
  const [animes, setAnimes] = useState(animesData); {/* lift state dari Main*/ }
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);


  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }
  return (
    <>
      <Navbar >
        <Search>
          <NumResult animes={animes} />  {/*drilling props animes di NumResult menggunakan children*/}
        </Search>
      </Navbar>
      <Main>
        <Box>   {/*reuse Box component*/}
          <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />  {/*drilling props animes dan onSelectedAnime ke AnimeList menggunakan children*/}
        </Box>
        <Box>  {/*reuse Box component*/}
          <AnimeDetail selectedAnime={selectedAnime} />   {/*drilling props selectedAnime ke AnimeDetail menggunakan children*/}
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

