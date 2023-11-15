import React from 'react'
import style from '../styles/Track.module.css'

function Track ({song, artist, album}) {
    return(
        <div className ={style.container}>
            <p>{song}</p>
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    )
}

export default Track;
