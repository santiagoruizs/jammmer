
import style from './App.module.css';
import React, {useState} from 'react'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayList from './components/Playlist';
import url from './api/generateAuth'
import getToken from './api/getToken';

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
let {access_token, expires_in} = getToken();
console.log(access_token);
console.log(expires_in);

function App() {  
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('')

  const trackClickHandler = (track) => {
    if (!playlist.find(obj => obj.id == track.id)){
      setPlaylist(prev =>  [track, ...prev])
     }
  }
  const deleteTrackHandler = (track) => {
    setPlaylist(prev => prev.filter(pl => pl.song !== track.song))
  }
  const loadSearch = () => {
    setResults(temResults)
  }

  const handlePlaylistTitle = (event) => {
    setPlaylistTitle(event.target.value)
  }
  const handleSavePlaytlist = () => {
    console.log(playlist)
    alert(`${playlistTitle} is saved successfully!!`)
    setPlaylistTitle('')
    setPlaylist([]) 
  }

  const handleSearch = async () => {
    let endpoint = 'https://api.spotify.com/v1/search?q='+encodeURIComponent('track:Gasolina')+'&type=track';
    const searchResult = await fetch(endpoint,{
        method: "GET",
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
          Authorization: 'Bearer '+access_token, 
        }
      })
    searchResult.json().then(
      (data) => { console.log(data) }
  );
  }
  return (
    <div className={style.container}>
      <h1 className={style.banner} >Jam<p className ={style.bannerLetter}>m</p>mer</h1>
      <a href={url}><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt='spotify' /></a>
      <SearchBar searchHandler = {loadSearch} handleSearch={handleSearch}/>
     
      <div className={style.playistContainer} >
        <SearchResults results={results} trackClick = {trackClickHandler}/>
        <PlayList playlist ={playlist} trackClick={deleteTrackHandler} handleTitle={handlePlaylistTitle} handleSave={handleSavePlaytlist} title={playlistTitle}/> 
      </div>
      <footer>App developed by Santiago Ruiz on a Codecademy challenge</footer>
    </div>
  );
}

export default App;
