import React from "react";
export default function ProductDetails({data}) {
   console.log(data);
   
    return (
        <div className="other-side-of-swiper">
            <div className="single-info-container">
                <h2 className="single-name">{data.name}</h2>
                <div className="single-prices">
                    <strong className="single-price"> {data.sale_price}ج.م</strong>
                    <span className="single-old-price"> {data.price}</span>
                </div>
                <div className="desc-cont">
                    <div className="product-rate">
                        <div className="stars" style={{"--rating": data.average_rate}}></div>
                        <span>({data.ratings_count})</span>
                    </div>
                    <p className="single-pargh">
                        {data.description}
                    </p>
                    <div className="radio-group">
                        <span className="radio-head"> المقاس : </span>
                        <div className="check-group">
                            <div className="check-width">
                                <label className="check-label">
                                    <span className="">
                                        <input type="radio" name="size" />
                                        <span className="check-text">xxl</span>
                                    </span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <span className="">
                                        <input type="radio" name="size" />
                                        <span className="check-text">xl</span>
                                    </span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <span className="">
                                        <input type="radio" name="size" />
                                        <span className="check-text">l</span>
                                    </span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <span className="">
                                        <input type="radio" name="size" />
                                        <span className="check-text">m</span>
                                    </span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <span className="">
                                        <input type="radio" name="size" />
                                        <span className="check-text">s</span>
                                    </span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <span className="">
                                        <input type="radio" name="size" />
                                        <span className="check-text">xs</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="color-group">
                        <span className="radio-head"> اللون :</span>
                        <div className="check-group">
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="color" />
                                    <span
                                        className="checkmark"
                                        style={{ backgroundColor: "red" }}
                                    ></span>
                                </label>
                            </div>
                            <div className="check-width">
                                <label className="check-label">
                                    <input type="radio" name="color" />
                                    <span
                                        className="checkmark"
                                        style={{ backgroundColor: "black" }}
                                    ></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-options">
                    <button className="item-addToCart">اضف إلى السلة</button>
                    <div className="item-qty single-item-qty">
                        <a role="button" className="single-qty-control qty-plus">
                            <i className="fa-light fa-plus"></i>
                        </a>
                        <a role="button" className="single-qty-control qty-minus">
                            <i className="fa-light fa-minus"></i>
                        </a>
                        <input
                            type="number"
                            className="single-qty-input qty-input"
                            value="1"
                            data-max="10"
                            data-min="1"
                        />
                    </div>
                </div>
                <div className="single-features">
                    <div className="features-box">
                        <i className="fa-solid fa-comments"></i>
                        <div className="features-text">
                            <h5 className="features-h">دعم ٢٤ ساعة</h5>
                            <span className="features-span">رسائل نصية وسوشيال ميديا</span>
                        </div>
                    </div>
                    <div className="features-box">
                        <i className="fa-solid fa-credit-card"></i>
                        <div className="features-text">
                            <h5 className="features-h">وسيلة دفع امنة</h5>
                            <span className="features-span">أمان عند الدفع</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
