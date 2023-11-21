import React from 'react'
import style from '../styles/Track.module.css'

function Track ({song, artist, album, id, handleClick, uri}) {
    const handleTrackClick = () =>{
        handleClick({id, song, artist, album, uri})
    }
    return(
        <div className ={style.container} onClick={handleTrackClick}>
            <p>{song}</p>
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    )
}

export default Track;
