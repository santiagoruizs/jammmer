import React, { useState } from 'react'
import TrackList from './Tracklist';
import style from '../styles/Playlist.module.css'

function PlayList (props) {
    return(
        <div className={style.container} >
            <input type="text" className={style.playlistTitle} placeholder='Type Your Playlist Title' />  
            <TrackList songs={props.playlist} trackClickHandler={props.trackClick}/>
            <button className={style.button}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default PlayList;