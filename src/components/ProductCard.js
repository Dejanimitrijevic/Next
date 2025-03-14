"use client"

import Image from "next/image"
import { useState } from "react"
import Button from "./Button";

const ProductCard = ({ data }) => {

    const [productCard, setProductCard] = useState(data);
    const [mainImageOpacity, setMainImageOpacity] = useState(1);
    const [hoverImageOpacity, setHoverImageOpacity] = useState(0);
    const [buttonOpacity, setButtonOpacity] = useState(0);

    const setOpacity = ()=>{
        setMainImageOpacity(0);
        setHoverImageOpacity(1);
        setButtonOpacity(1);
    }

    const removeOpacity =()=>{
        setMainImageOpacity(1);
        setHoverImageOpacity(0);
        setButtonOpacity(0);
    }

    return (
        <div className="product-card">
            <div onMouseEnter={setOpacity} onMouseLeave={removeOpacity} id={productCard.id} className="media">
                <a href={productCard.url} className="product-image main">
                    <Image
                        src={productCard.mainImage}
                        alt="main-image"
                        className="image"
                        width={180}
                        height={180}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: `${mainImageOpacity}` }}
                    />
                </a>
                <a href={productCard.url} className="product-image hover">
                    <Image
                        src={productCard.hoverImage}
                        alt="hover-image"
                        className="image"
                        width={180}
                        height={180}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: `${hoverImageOpacity}` }}
                    />
                </a>
                {
                    productCard.addToCartButton.type == 'single' && buttonOpacity == 1 ?
                        <Button data={productCard} />
                        : null
                }
            </div>
            <a href={productCard.url} className="product-title">
                {productCard.title}
            </a>
            {
                productCard.addToCartButton.type == 'variants' ?
                    <Button data={productCard} />
                    : null
            }
        </div>
    )
}

export default ProductCard