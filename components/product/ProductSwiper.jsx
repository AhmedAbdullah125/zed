"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function ProductSwiper({ data }) {
    console.log(data);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // fallback so it doesn’t crash if data is empty
    return (
        <div className="product-imgs-cont">
            {/* Thumbs slider (right side in your design) */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={3.2}
                direction="vertical"
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="swiper product-thumbs"
                //after 767px => horizontal
                breakpoints={{
                    5040: {
                        direction: "horizontal",
                        slidesPerView: 3.2, 
                    },
                    768: {
                        direction: "vertical",
                        slidesPerView: 3.2, 
                    },
                    100: {
                        direction: "horizontal",
                        slidesPerView: 3.2, 
                    },
                }}
            >
                {data.images.map((src, idx) => (
                    <SwiperSlide key={`thumb-${idx}`}>
                        <div className="thumb-cont">
                            <div className="thumb-img">
                                <Image width={500} height={500} src={src} alt={`thumb-${idx}`} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Main slider (big image on the left) */}
            <Swiper
                spaceBetween={0}
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="swiper product-imgs"
            >
                {data.images.map((src, idx) => (
                    <SwiperSlide key={`main-${idx}`}>
                        <div className="single-img-container">
                            <a
                                data-fancybox="post"
                                href={src}
                                className="single-img"
                            >
                                <Image width={500} height={500} src={src} alt={`product-${idx}`} />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
