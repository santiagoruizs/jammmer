import React from 'react'
import TrackList from './Tracklist';
const temResults = [
    {
        song: 'Song 1',
        artist: 'Artist 1',
        album: 'The Album 1',
    },
    {
        song: 'Song 2',
        artist: 'Artist 2',
        album: 'The Album 2',
    },

];
function PlayList () {
    return(
        <div>
            <h2>Playlist</h2>    
            <TrackList songs={temResults}/>
            <button>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default PlayList;