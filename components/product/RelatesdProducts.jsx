"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

export default function RelatesdProducts({ data }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="cat-section">
            <div className="container">
                <div className="section-head">
                    <h3 className="section-title">منتجات ذات صلة</h3>
                    <div className="slider-btn-cont">
                        <button
                            className="swiper-btn-prev swiper-btn"
                            ref={prevRef}
                            type="button"
                        >
                            <i className="fa-regular fa-chevron-right"></i>
                        </button>
                        <button
                            className="swiper-btn-next swiper-btn"
                            ref={nextRef}
                            type="button"
                        >
                            <i className="fa-regular fa-chevron-left"></i>
                        </button>
                    </div>
                </div>

                <div className="product-slider">
                    {/* Swiper replaces .swiper + .swiper-container + .swiper-wrapper */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={4}
                        className="swiper swiper-container"
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                    >
                        {/* slide 1 (same classes as your HTML) */}
                        {
                            data.related_products_data.map((item) =>
                                <SwiperSlide className="swiper-slide" key={item.id}>
                                    <div className="product">
                                        <Link href={`/product/${item.id}`} className="product-item">
                                            <figure className="product-img">
                                                <Image
                                                    loading="lazy"
                                                    src={item.image}
                                                    className="img-fluid"
                                                    alt="Wavy Tee"
                                                    width={400}
                                                    height={400}
                                                />
                                            </figure>
                                            <div className="product-content">
                                                <div className="product-name">{item.name}</div>
                                                <div className="price-box">
                                                    <span className="price">{item.price} ج.م</span>
                                                </div>
                                                <div className="product-rate">
                                                    <div
                                                        className="stars"
                                                        style={{ "--rating": item.average_rate }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            )
                        }


                    </Swiper>
                </div>
            </div>
        </section>
    );
}
