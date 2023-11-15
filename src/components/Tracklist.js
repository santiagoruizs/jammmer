import React from 'react'
import Track from './Track';

function TrackList (props) {
    return(
        <div>
            <ul>
                {props.songs.map(data => <li><Track song={data.song} artist={data.artist} album={data.album}/></li>)}
            </ul>
        </div>
    )
}

export default TrackList;