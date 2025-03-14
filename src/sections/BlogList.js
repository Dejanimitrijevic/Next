"use client"

import BlogCard from "@/components/BlogCard";

const { useState } = require("react")

const BlogList = ({ data }) => {

    const [blogList, setBlogList] = useState(data);

    return (
        <div className="blog-list">
            <div className="blog-list-title">
                {blogList.title}
            </div>
            <div className="blog-list-items">
                {
                    blogList.sections.map((item, index) => (
                        <BlogCard key={index} data={item} />
                ))
                }
            </div>
        </div>
    )

}

export default BlogList;