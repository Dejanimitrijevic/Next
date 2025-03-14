"use client"

import Image from "next/image";

const { useState } = require("react")

const BlogCard = ({ data }) => {

    const [blogCard, setBlogCard] = useState(data);
    const [overlayOpacity, setOverlayOpacity] = useState(0);

    const setOpacity=()=>{
        setOverlayOpacity(1)
    }

    const removeOpacity =()=>{
        setOverlayOpacity(0);
    }

    return (
        <a href={blogCard.url} className="blog-card">
            <div onMouseEnter={setOpacity} onMouseLeave={removeOpacity} className="blog-card-media">
                <Image
                    src={blogCard.image}
                    alt="blog"
                    width={180}
                    height={180}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="overlay" style={{opacity: `${overlayOpacity}`}}>
                    <a href={blogCard.button.url}>{blogCard.button.content}</a>
                </div>
            </div>
            <div className="blog-title">
                {blogCard.title}
            </div>
        </a>
    )
}

export default BlogCard;