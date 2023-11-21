import React from 'react'
import Track from './Track';
import style from '../styles/Tracklist.module.css'

function TrackList (props) {
    return(
        <div>
            <ul className={style.songsList}>
                {props.songs.map(data => <li className={style.song} key={data.id} ><Track song={data.song} artist={data.artist} album={data.album} value = {{song: data.song}} id = {data.id} uri={data.uri} handleClick={props.trackClickHandler}/></li>)}
            </ul>
        </div>
    )
}

export default TrackList;