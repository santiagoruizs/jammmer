
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

const getUid = fetch('https://api.spotify.com/v1/me',{//A OTRA CARPETA
  method: "GET",
  headers: {
    'Accept': 'application/json',
    "Content-Type": "application/json",
    Authorization: 'Bearer '+access_token, 
  }
})
.then(response => response.json())
.then(user => {
  return user.id
})

console.log(access_token);
console.log(expires_in);

function App() {  
  const [searchText, setSearchText] = useState('');
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
  const handleSavePlaytlist = async () => {
    const URIS = playlist.map(track => track.uri)
    console.log(URIS)
    alert(`${playlistTitle} is saved successfully!!`)
    setPlaylistTitle('')
    setPlaylist([])
    const uid = await getUid

    const apiUrl = `https://api.spotify.com/v1/users/${uid}/playlists`;
    const headers = new Headers({
      'Authorization': 'Bearer '+access_token,
      'Content-Type': 'application/json',
    });

    const body = JSON.stringify({
      name: playlistTitle,
      description: 'Playlist Created With Jammmer',
      public: false,
    });

    const playListId = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: body,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return data.id;
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
      const playlistTracksUrl = `https://api.spotify.com/v1/playlists/${playListId}/tracks`;

      const plBody = JSON.stringify({
        uris: URIS,
        position: 0
      });

      const playListTracks = await fetch(playlistTracksUrl, {
        method: 'POST',
        headers: headers,
        body: plBody,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
         console.log('Success: ', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

    }

  const handleSearch = async () => {
    setResults([])
    if (searchText){
      let endpoint = 'https://api.spotify.com/v1/search?q='+encodeURIComponent(`track:${searchText}`)+'&type=track&limit=5';
      const searchResult = await fetch(endpoint,{
          method: "GET",
          headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            Authorization: 'Bearer '+access_token, 
          }
        })
      searchResult.json().then(
        (data) => {
          console.log(data)
          data.tracks.items.forEach((track, i) => {
          let trackData = {id: track.id, song:track.name, album:track.album.name, artist: track.artists[0].name, uri:track.uri}
          console.log(`Name: ${track.name}, Album: ${track.album.name}, Artist: ${track.artists[0].name}, URI: ${track.uri}`)
          setResults(prev => [...prev, trackData])
        })}
      )
    }
  }
  return (
    <div className={style.container}>
      <h1 className={style.banner} >Jam<p className ={style.bannerLetter}>m</p>mer</h1>
      <a href={url}><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt='spotify' /></a>
      <SearchBar searchHandler = {loadSearch} handleSearch={handleSearch} searchText={searchText} handleTextSearch={(event) => {setSearchText(event.target.value)}}/>
     
      <div className={style.playistContainer} >
         {results[0] && <SearchResults results={results} trackClick = {trackClickHandler}/>}
         {true && <PlayList playlist ={playlist} trackClick={deleteTrackHandler} handleTitle={handlePlaylistTitle} handleSave={handleSavePlaytlist} title={playlistTitle}/> }
      </div>
      <footer>App developed by Santiago Ruiz on a Codecademy challenge</footer>
    </div>
  );
}

export default App;
