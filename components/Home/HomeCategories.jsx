'use client'
import React from "react";
import { useGetHomeCategories } from "./useGetHomeCategories";
import { useGetCategoryProducts } from "./useGetCategoryProducts";
import CategoryWithBanner from "./CategoryWithBanner";
import banner1 from '@/src/images/banner/01.webp'
import banner2 from '@/src/images/banner/02.webp'
import banner3 from '@/src/images/banner/03.webp'
export default function HomeCategories() {
    const perPage = 10;
    // const { data, isLoading } = useGetHomeCategories(perPage);
    const { data: new_arrival, isLoading: new_arrivalLoading } = useGetCategoryProducts(15);
    const { data: discounts, isLoading: discountsLoading } = useGetCategoryProducts(14);
    console.log(discounts);
    console.log(new_arrival);
    return (
        <div className="home-categories">
            {new_arrival?.length > 0 && <CategoryWithBanner data={new_arrival} banner = {banner1}/>}
            {discounts?.length > 0 && <CategoryWithBanner data={discounts} banner = {banner2} />}

        </div>
    )
}
