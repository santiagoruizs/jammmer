
import style from './App.module.css';
import React from 'react'
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayList from './components/Playlist';

function App() {
  return (
    <div>
      <h1 className={style.banner} >Jammmer</h1>
      <SearchBar />
      <SearchResults />
      <PlayList />
    </div>
  );
}

export default App;
