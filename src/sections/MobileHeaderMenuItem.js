"use client"

const { useState } = require("react");
import SwiperGallery from "@/components/SwiperGallery";
import LinkList from "./LinkList";
import LinksButton from "./LinksButton";
import Icons from "@/components/Icons";

const MobileHeaderMenuItem = ({ mobileFilter, setMobileFilter, data }) => {

    const [mobileHeaderMenuItem, setMobileHeaderMenuItem] = useState(data);

    return (
        <div className="mobile-header-menu-item">
            <div className="mobile-header-menu-item-header" onClick={() => setMobileFilter(mobileHeaderMenuItem.data.id)}>
                <h3>{mobileHeaderMenuItem.data.title}</h3>
                {
                    mobileHeaderMenuItem.state == 'open' ?
                        <a href="/">SHOP ALL</a>
                        :
                        <Icons data={'arrow-right'} />
                }
            </div>
            <div className={`mobile-header-menu-item-content ${mobileHeaderMenuItem.state == 'open' ? '' : 'slide'} `}
                style={{ display: `${(mobileHeaderMenuItem.state == 'open') ? 'block' : (mobileFilter == mobileHeaderMenuItem.data.id) ? 'block' : 'none'}` }} >
                {
                    mobileHeaderMenuItem.state != 'open' ?
                        <div className="subnav-header">
                            <div onClick={() => setMobileFilter('')} className="arrow-left">
                                <Icons data={'arrow-left'} />
                            </div>
                            <span>{mobileHeaderMenuItem.data.title}</span>
                        </div>
                        : <></>
                }
                {
                    mobileHeaderMenuItem.data.sections.map((item, index) => (
                        (item.name == 'product-list') ?
                            <SwiperGallery key={index} data={{ number: 2.4, data: item }} />
                            : (item.name == 'blog-list') ?
                                <SwiperGallery key={index} data={{ number: 1.2, data: item }} />
                                : (item.name == 'link-list') ?
                                    <LinkList key={index} data={item} />
                                    : (item.name == 'links-button') ?
                                        <LinksButton key={index} data={item} />
                                        : null
                    ))
                }
            </div>
        </div>
    )
}


export default MobileHeaderMenuItem;