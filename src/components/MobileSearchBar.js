"use client"

import Icons from "./Icons";

const MobileSearchBar = ({searchState, setSearchState, serachTransform, setSearchTransform}) => {

    const setOpacity =()=>{
        setSearchState(1);
        setSearchTransform(true)
    }

    return (
        <div className="mobile-search" onClick={setOpacity}>
            <div className="main-search">
                <Icons data={'search-icon'} />
                <button className="serach-input">Search</button>
            </div>
        </div>
    )
}

export default MobileSearchBar;