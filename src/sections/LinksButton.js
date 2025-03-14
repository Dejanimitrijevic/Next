"use client"

import Button from "@/components/Button";

const { useState } = require("react")

const LinksButton = ({ data }) => {

    const [linksButton, setLinksButton] = useState(data);

    return (
        <div className="links-button">
            <div className="links">
                <span className="links-title">{linksButton.title}</span>
                {
                    linksButton.blocks.map((item, index) => (
                        item.type == 'link' ?
                            <a key={index} href={item.url} ><span className="link-item">{item.content}</span></a>
                            : null
                    ))
                }
            </div>
            {
                linksButton.button ?
                    <Button data={linksButton.button} />
                    : null
            }
        </div>
    )
}

export default LinksButton;