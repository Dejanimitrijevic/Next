"use client"

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import TextButton from "./TextButton";
import ProductList from "./ProductList";
import LinkList from "./LinkList";
import LinksButton from "./LinksButton";
import BlogList from "./BlogList";
import ThemeContext from "@/context/ThemeContext";
import Icons from "@/components/Icons";

const HeaderMenuItem = ({ data }) => {

    const [headerMenuItem, setHeaderMenuItem] = useState(data);

    const { state, setState } = useContext(ThemeContext)

    const setOpacity =()=>{
        setState(headerMenuItem.id)
    }

    const removeOpacity=()=>{
        setState('')
    }

    return (
        <>
            <div className="header-menu-item">
                <div onMouseEnter={setOpacity} onMouseLeave={removeOpacity} id={headerMenuItem.id} className="nav">
                    <span>{headerMenuItem.title}</span>
                    <Icons data={'down-arrow'} />
                </div>
                <div onMouseEnter={setOpacity} onMouseLeave={removeOpacity} style={{ maxHeight: `${state == headerMenuItem.id ? '100vh' : '0px'}` }} className="subnav">
                    <div className="subnav-sections">
                        {
                            headerMenuItem.sections.map((item, index) => (
                                (item.name == 'text-button') ?
                                    <TextButton key={index} data={item} />
                                    : (item.name == 'product-list') ?
                                        <ProductList key={index} data={item} />
                                        : (item.name == 'link-list') ?
                                            <LinkList key={index} data={item} />
                                            : (item.name == 'links-button') ?
                                                <LinksButton key={index} data={item} />
                                                : (item.name == 'blog-list') ?
                                                    <BlogList key={index} data={item} />
                                                    : null
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderMenuItem;