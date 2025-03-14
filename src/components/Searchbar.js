"use client"

import { use, useEffect, useState } from "react";
import Icons from "./Icons";

const SearchBar = ({ searchState, setSearchState, serachTransform, setSearchTransform }) => {

    const [search, setSearch] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    const closeSearch = () => {
        setSearchState(0)
        setSearchTransform(false)
    }

    const style = {
        opacity: `${searchState}`,
        transform: `${isMobile == true ? serachTransform == false ? 'translateX(-100%)' : 'translateX(0px)' : ''}`
    }

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false)
        };

        handleResize(); // Run initially
        window.addEventListener("resize", handleResize);
    }, [])

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