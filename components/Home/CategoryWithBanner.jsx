import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function CategoryWithBanner({ data, banner }) {
    return (
        <div className="category-with-banner">
            <section className="product-section">
                <div className="container">
                    <div className="section-head">
                        <h3 className="section-title">{data[0].category}</h3>
                        <Link href={`/category/${data[0].category_id ? data[0].category_id : 1}`} className="products-link"> عرض الكل</Link>
                    </div>
                    <div className="product-slider" style={{ direction: "ltr" }}>
                        <Swiper
                            pagination={{ clickable: true }}
                            spaceBetween={12}
                            slidesPerView={5}
                            loop={true}
                            autoplay={false}
                            navigation={{
                                nextEl: `#swiper-btn-leftCategort${data[0].category_id}`,
                                prevEl: `#swiper-btn-rightCategort${data[0].category_id}`,
                            }}
                            modules={[Autoplay, Navigation, Pagination]}
                            className="category-swiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                640: {
                                    slidesPerView: 1,
                                },
                                120: {
                                    slidesPerView: 1,
                                }
                            }}>
                            {
                                data?.map((item) => (
                                    <SwiperSlide key={item.id} className="category-swiper-slide">
                                        <Link href={`/product/${item.id}`} className="product-item">
                                            <figure className="product-img">
                                                <Image loading="lazy" src={item.image} className="img-fluid" width={400} height={400} alt="product-image" />
                                            </figure>
                                            <div className="product-content">
                                                <div className="product-name">{item.name}</div>
                                                <div className="price-box">
                                                    <span className="price">{item.price} ج.م</span>
                                                </div>
                                                <div className="product-rate">
                                                    <i className="fa-regular fa-star"></i>
                                                    {item.average_rate}
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className="swiper-btn-prev swiper-btn" id={`swiper-btn-leftCategort${data[0].category_id}`}>
                            <i className="fa-regular fa-chevron-right" ></i>
                        </div>
                        <div className="swiper-btn-next swiper-btn" id={`swiper-btn-rightCategort${data[0].category_id}`}>
                            <i className="fa-regular fa-chevron-left"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className="big-banner-section">
                <div className="container">
                    <div className="big-banner-cont">
                        <Link href={`/category/${data[0].category_id ? data[0].category_id : 1}`}> <Image loading="lazy" src={banner} alt="banner-image" /></Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
