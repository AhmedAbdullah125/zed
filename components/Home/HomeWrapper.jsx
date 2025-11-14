import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import HomeCategories from "./HomeCategories";
import Instagram from "./Instagram";
export default function page() {
  return (
    <div className="home-page-content">
       <Hero />
       <Features />
       <HomeCategories />
       <Instagram />
    </div>
  )
}
