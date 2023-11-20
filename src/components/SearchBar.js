import React from 'react'
import style from '../styles/Searchbar.module.css'

function SearchBar (props) {
    return(
        <div className={style.container}>
                <input type="text" name="searchInput" className={style.input} />
                <button type="submit" className={style.button} onClick={props.handleSearch}>SEARCH</button>
        </div>
    )
}

export default SearchBar;
