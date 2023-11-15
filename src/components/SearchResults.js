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
    {
        song: 'Song 3',
        artist: 'Artist 3',
        album: 'The Album 3',
    },
    {
        song: 'Song 4',
        artist: 'Artist 4',
        album: 'The Album 4',
    },
];
function SearchResults () {
    return(
        <div>
            <h2>Results</h2>
            <TrackList songs={temResults} />
        </div>
    )
}

export default SearchResults;