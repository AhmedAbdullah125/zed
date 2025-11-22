'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/src/images/logo.svg'
import profileImg from '@/src/images/profile.jpg'
import cart from '@/src/images/cart.svg'
export default function Page() {
    const [search, setSearch] = useState("");

    return (
        <>
            <header>
                <div className="header-cont">
                    <div className="top-header">
                        <div className="container">
                            <div className="nav-header">
                                <figure className="img-logo">
                                    <Link href="/"><Image loading="lazy" alt="zed" src={logo} /></Link>
                                </figure>
                                <div className="navgition">
                                    <ul className="big-menu">
                                        <li>
                                            <Link href="/" className="active"> الرئيسية </Link>
                                        </li>
                                        <li>
                                            <Link href="/categories"> فئات </Link>
                                        </li>
                                        <li>
                                            <Link href="/brands"> الماركات </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="search-section">
                                    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                                        <input
                                            className="search-input"
                                            type="text"
                                            placeholder="ابحث عن أي شيء هنا"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                        <button className="search-button">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </form>
                                </div>

                                <div className="header-icons">
                                    <Link href="#" className="cart-icon">
                                        <div className="cart-info">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            <span className="counter">5</span>
                                        </div>
                                        <span>40.000 ج،م</span>
                                    </Link>
                                    <div className="dropdown cat-anchor">
                                        <div className="user-cont">
                                            <div className="user-img">
                                                <Image
                                                    loading="lazy"
                                                    src={profileImg}
                                                    alt="profile-img"
                                                />
                                                <i className="fa-solid fa-user"></i>
                                            </div>
                                            <div className="user-info">
                                                <span>أهلًا وسهلًا</span>
                                                <span className="user-anc"
                                                >أحمد سعيد<i className="fa-solid fa-chevron-down"></i></span>
                                            </div>
                                        </div>
                                        <div className="dropdown-content">
                                            <Link className="cat-drop" href="#">دخول</Link>
                                            <Link className="cat-drop" href="#">تسجيل جديد </Link>
                                        </div>
                                    </div>

                                    <div className="show-icons">
                                        <Link className="menu-bars fixall" id="menu-id" href="#!">
                                            <span className="bars open-bars"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overlay-box2"></div>
                    </div>
                </div>
            </header>
            <div className="menu-bar">
                <div> <Link href="/" className="active" ><i className="fa-solid fa-house"></i><span>الرئيسية</span></Link ></div>
                <div> <Link href="/categories" ><i className="fa-solid fa-file-magnifying-glass"></i ><span>الفئات</span></Link ></div>
                <div> <Link href="/cart" className="cart-icon" ><Image loading="lazy" src={cart} alt='Zed' /></Link> </div>
                <div> <Link href="/brands"><i className="fa-solid fa-award"></i><span>الماركات</span></Link> </div>
                <div> <Link href="/profile"><i className="fa-solid fa-user"></i><span>الحساب</span></Link> </div>
            </div>
        </>
    )
}
