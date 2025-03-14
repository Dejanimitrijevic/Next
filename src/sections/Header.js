"use client"

import Image from "next/image";

import HeaderMenuItem from "./HeaderMenuItem";
import { HeaderMenuData, logoData } from "@/Data/Data";
import { useEffect, useState } from "react";
import SearchBar from "@/components/Searchbar";
import MobileHeaderMenuItem from "./MobileHeaderMenuItem";
import MobileSearchBar from "@/components/MobileSearchBar";
import Login from "@/components/Login";
import SocialIcons from "@/components/SocialIcons";
import MobileLinks from "@/components/MobileLinks";
import Icons from "@/components/Icons";

const Header = () => {

    const [HeaderMenu, setHeaderMenu] = useState([]);
    const [searchState, setSearchState] = useState(0);
    const [serachTransform, setSearchTransform] = useState(0);
    const [mobileDrawer, setMobileDrawer] = useState(false)
    const [mobileFilter, setMobileFilter] = useState('');

    const switchSearch = () => {
        searchState == 0 ? setSearchState(1) : setSearchState(0);
    }

    const mobileHeaderDrawerStyle = {
        transform: `${mobileDrawer == true ? 'translateX(0px)' : 'translateX(-100%)'}`
    }

    const openMobileDrawer = () => {
        setMobileDrawer(true)
    }

    const closeMobileHeaderDrawer = () => {
        setMobileDrawer(false)
    }

    useEffect(() => {
        setHeaderMenu(HeaderMenuData);
    }, [])

    return (
        <>
            <header>
                <div className="header-section">
                    <div className="header">
                        <button className="mobile switch-mobile-drawer" onClick={openMobileDrawer}>
                            <Icons data={'menu'} />
                        </button>
                        <div className="header-menu desktop">
                            {
                                HeaderMenu.map((item, index) => (
                                    <HeaderMenuItem key={index} data={item} />
                                ))
                            }
                        </div>
                        <div className="header-logo">
                            <Image
                                src={logoData.imageUrl}
                                alt="Logo"
                                width={93}
                                height={28.5}
                            />
                        </div>
                        <div className="header-links">
                            <a href="/" className="header-link-item desktop">Partner Locator</a>
                            <button onClick={switchSearch} className="header-link-item search desktop">Search</button>
                            <a href="/" className="header-link-item account desktop">Account</a>
                            <a href="/" className="header-link-item cart">Cart(0)</a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="mobile header-drawer-section" style={mobileHeaderDrawerStyle}>
                <div className="overlay-mobile" onClick={closeMobileHeaderDrawer}></div>
                <div className="header-drawer">
                    <div className="header-drawer-items">
                        <Login />
                        <MobileSearchBar searchState={searchState} setSearchState={setSearchState} serachTransform={serachTransform} setSearchTransform={setSearchTransform} />
                        <div className="mobile-header-menu">
                            {
                                HeaderMenuData.map((item, index) => (
                                    <MobileHeaderMenuItem key={index} mobileFilter={mobileFilter} setMobileFilter={setMobileFilter} data={{ data: item, state: `${index == 0 ? 'open' : ''}` }} />
                                ))
                            }
                        </div>
                        <MobileLinks />
                        <SocialIcons />
                        <button className="mobile-drawer-close-icon" onClick={closeMobileHeaderDrawer}>
                            <Icons data={'closer'} />
                        </button>
                    </div>
                </div>
            </div>
            <SearchBar searchState={searchState} setSearchState={setSearchState} serachTransform={serachTransform} setSearchTransform={setSearchTransform} />
        </>
    )
}

export default Header;