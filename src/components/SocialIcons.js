"use client"

import Icons from "./Icons";

import { socialIconsData } from "@/Data/Data";

const SocialIcons = () => {

    return (
        <div className="social-icons">
            {
                socialIconsData.map((item , index)=>(
                    <a key={index} href="/" className="socail-icon-item">
                        <Icons data={item} />
                    </a>
                ))
            }
        </div>
    )
}

export default SocialIcons;