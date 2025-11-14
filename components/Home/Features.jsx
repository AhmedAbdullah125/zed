import React from "react";
export default function Features() {
    return (
        <section className="feature-section">
            <div className="container">
                <div className="features">
                    <div className="features-box">
                        <i className="fa-regular fa-truck"></i>
                        <h5 className="features-h">شحن مجاني</h5>
                        <span className="features-span">على جميع الطلبات فوق 500 جنيه</span>
                    </div>
                    <div className="features-box">
                        <i className="fa-regular fa-credit-card"></i>
                        <h5 className="features-h">دفع آمن</h5>
                        <span className="features-span">طرق دفع متعددة وآمنة 100%</span>
                    </div>
                    <div className="features-box">
                        <i className="fa-regular fa-shield"></i>
                        <h5 className="features-h">ضمان الجودة</h5>
                        <span className="features-span">منتجات أصلية بضمان كامل</span>
                    </div>
                    <div className="features-box">
                        <i className="fa-regular fa-headset"></i>
                        <h5 className="features-h">دعم 24/7</h5>
                        <span className="features-span">خدمة عملاء متاحة طوال الوقت</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
