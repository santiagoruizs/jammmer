import React, { useState } from 'react'
import TrackList from './Tracklist';
import style from '../styles/SearchResults.module.css'


function SearchResults (props) {
    
    return(
        <div className={style.container} >
            <h2>Results</h2>
            <TrackList songs={props.results} trackClickHandler={props.trackClick} />
        </div>
    )
}

export default SearchResults;