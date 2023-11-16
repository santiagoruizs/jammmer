
import style from './App.module.css';
import React, {useState} from 'react'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayList from './components/Playlist';

const temResults = [
  {
      id: 1,
      song: 'Song 1223',
      artist: 'Artist 1',
      album: 'The Album 1',
  },
  {
      id: 2,
      song: 'Song 2',
      artist: 'Artist 2',
      album: 'The Album 2',
  },
  {
      id: 3,
      song: 'Song 3',
      artist: 'Artist 3',
      album: 'The Album 3',
  },
  {
      id: 4,
      song: 'Song 4',
      artist: 'Artist 4',
      album: 'The Album 4',
  },
];

function App() {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const trackClickHandler = (track) => {
    if (!playlist.find(obj => obj.id == track.id)){
      setPlaylist(prev => [track, ...prev])
     }
  }
  const deleteTrackHandler = (track) => {
    setPlaylist(playlist.filter(pl => pl.song !== track.song))
     
  }
  const loadSearch = () => {
    setResults(temResults)
  }
  return (
    <div className={style.container}>
      <h1 className={style.banner} >Jammmer</h1>
      <SearchBar searchHandler = {loadSearch}/>
      <div className={style.playistContainer} >
        <SearchResults results={results} trackClick = {trackClickHandler}/>
        <PlayList playlist ={playlist} trackClick={deleteTrackHandler}/> 
      </div>
      <footer>App developed by Santiago Ruiz on a Codecademy challenge</footer>
    </div>
  );
}

export default App;
