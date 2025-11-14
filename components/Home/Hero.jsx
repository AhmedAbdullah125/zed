'use client'
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import mainImage from '@/src/images/main.png'
import Image from 'next/image';

import Link from 'next/link';
export default function Hero() {
    return (
        <main className="main-slider">
            <div className="container">
                <Swiper
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000, // autoplay delay in ms
                        disableOnInteraction: false, // keeps autoplay active after user interaction
                    }} navigation={{
                        nextEl: `#swiper-btn-leftHero`,
                        prevEl: `#swiper-btn-rightHero`,
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    breakpoints={{
                        1400: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="main">
                            <Link href="#!" className="pro-img">
                                <Image src={mainImage} loading="lazy" className="img-fluid" alt="zed" width={500} height={500} />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main">
                            <Link href="#!" className="pro-img">
                                <Image src={mainImage} loading="lazy" className="img-fluid" alt="zed" width={500} height={500} />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main">
                            <Link href="#!" className="pro-img">
                                <Image src={mainImage} loading="lazy" className="img-fluid" alt="zed" width={500} height={500} />
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main">
                            <Link href="#!" className="pro-img">
                                <Image src={mainImage} loading="lazy" className="img-fluid" alt="zed" width={500} height={500} />
                            </Link>
                        </div>
                    </SwiperSlide>
                <div className="swiper-btn-prev swiper-btn" id="swiper-btn-leftHero">
                    <i className="fa-regular fa-chevron-right"></i>
                </div>
                <div className="swiper-btn-next swiper-btn" id="swiper-btn-rightHero">
                    <i className="fa-regular fa-chevron-left"></i>
                </div>
                </Swiper>
            </div>
        </main>
    )
}
