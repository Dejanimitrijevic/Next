"use client"

import { useState } from "react";
import Icons from "./Icons";

const SearchBar = ({ searchState, setSearchState, serachTransform, setSearchTransform }) => {

    const [search, setSearch] = useState('');

    const closeSearch = () => {
        setSearchState(0)
        setSearchTransform(false)
    }

    const style = {
        opacity: `${searchState}`,
        transform: `${window.innerWidth < 1024 ? serachTransform == false ? 'translateX(-100%)' : 'translateX(0px)' : ''}`
    }

    return (
        <div className="search-bar" style={style}>
            <div className="main-search">
                <Icons data={'search-icon'} />
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="serach-input" />
            </div>
            <button onClick={closeSearch} className="closer">
                <Icons data={'closer'} />
            </button>
        </div>
    )
}

export default SearchBar;