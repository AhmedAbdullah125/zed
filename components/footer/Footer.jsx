import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@/src/images/logo.svg";
import pay from "@/src/images/pay.png";
export default function page() {
    return (
        <footer>
            <div className="container">
                <div className="footer-cont">
                    <div className="row">
                        <div className="footer-item">
                            <figure className="footer-logo">
                                <Link href="/" ><Image loading="lazy" src={logo} className="img-fluid" alt="ZED" /></Link>
                            </figure>
                            <div className="social-info">
                                <div className="">1150 ِ أحمد ماهر</div>
                                <Link href="mailto:SUPPORT@ZED.com">SUPPORT@ZED.com</Link>
                                <Link href="tel:+01063441755">ت / 01063441755</Link>
                            </div>
                            <div className="social">
                                <Link href="#" className="social-link">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                                <Link href="#" className="social-link">
                                    <i className="fa-brands fa-facebook"></i>
                                </Link>
                                <Link href="#" className="social-link">
                                    <i className="fa-brands fa-youtube"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="footer-item">
                            <div className="nav-foot-cont">
                                <h2 className="nav-foot-header nav-accordion">تصفح حسب المجموعة</h2>
                                <ul className="nav-foot nav-wrap list-unstyled">
                                    <li className="nav-foot-li">
                                        <Link href="#" className="nav-foot-link">ملابس JDM </Link>
                                    </li>
                                    <li className="nav-foot-li">
                                        <Link href="#" className="nav-foot-link">هوديس </Link>
                                    </li>
                                    <li className="nav-foot-li">
                                        <Link href="#" className="nav-foot-link">الرقبة المستديرة </Link>
                                    </li>
                                    <li className="nav-foot-li">
                                        <Link href="#" className="nav-foot-link">تي شيرتات </Link>
                                    </li>
                                    <li className="nav-foot-li">
                                        <Link href="#" className="nav-foot-link">اكسسوارات</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-item">
                            <div className="nav-foot-cont">
                                <h2 className="nav-foot-header nav-accordion">خدمة العملاء</h2>
                                <ul className="nav-foot nav-wrap list-unstyled">
                                    <li className="nav-foot-li">
                                        <Link href="#" className="nav-foot-link">اتصل بنا</Link>
                                    </li>
                                    <li className="nav-foot-li">
                                        <Link href="#" className="nav-foot-link">تتبع الطلب </Link>
                                    </li>
                                    <li className="nav-foot-li">
                                        <Link href="#" className="nav-foot-link">سياسة الخصوصية </Link>
                                    </li>
                                    <li className="nav-foot-li">
                                        <Link href="#" className="nav-foot-link">الأسئلة الشائعة</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-item">
                            <h2 className="footer-head">مدفوعات آمنة ومحمية بنسبة 100٪</h2>
                            <Image loading="lazy" alt="pay-method" src={pay} className="pay-footer" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-section">
                <div className="container">
                    <div className="copy-right">© 2025 ، زيد. كل الحقوق محفوظة.</div>
                </div>
            </div>
        </footer>
    )
}
