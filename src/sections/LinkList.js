"use client"

import { useState } from "react";

const LinkList = ({ data }) => {

    const [linkList, setLinkList] = useState(data);

    return (
        <div className="link-list">
            {
                linkList.blocks.map((item, index)=>(
                    <a key={index} href={item.url} className="link-list-item">{item.content}</a>
                ))
            }
        </div>
    )
}

export default LinkList;