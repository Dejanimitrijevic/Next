"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
const SwiperGallery = ({ data }) => {

    const [progress, setProgress] = useState(0);

    const [swiperData, setSwiperData] = useState(data);

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            {
                swiperData.data.name == 'blog-list' ?
                    <div className="mobile-blog-list-title">
                        {swiperData.data.title}
                    </div>
                    : <></>
            }
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={swiperData.number}
                onProgress={(swiper) => setProgress(swiper.progress)}
            >
                {
                    (swiperData.data.name == 'product-list') ?
                        swiperData.data.products.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-item">
                                    <img src={item.mainImage} alt={`Slide ${index}`} />
                                    <span className="swiper-item-title">
                                        {item.title}
                                    </span>
                                    <button className="button-link">
                                        {item.addToCartButton.type == 'single' ? item.addToCartButton.content : 'ADD TO CART'}
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))
                        :
                        (swiperData.data.name == 'blog-list') ?
                            swiperData.data.sections.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <a href={item.url} className="swiper-item">
                                        <img src={item.image} alt={`Slide ${index}`} />
                                        <span className="swiper-item-title">
                                            {item.title}
                                        </span>
                                    </a>
                                </SwiperSlide>
                            )) : null
                }
            </Swiper>

            <div className="swiper-progress rounded-md">
                <div
                    className="h-full swiper-value transition-all duration-300"
                    style={{ width: `${progress * 100}%` }}
                ></div>
            </div>
        </div>
    )
}

export default SwiperGallery;