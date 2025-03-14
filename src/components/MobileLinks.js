"use client"

import Icons from "./Icons";

const MobileLinks = () => {

    return (
        <div className="mobile-links">
            <a className="mobile-link-item" href="/">
                <Icons data={'partner'} />
                Partner Locator
            </a>
            <a className="mobile-link-item" href="/">
                <Icons data={'faq'} />
                FAQ
            </a>
        </div>
    )
}

export default MobileLinks;