import React from "react";
import { useGetProductData } from "./useGetProductData";
import Loading from "@/src/app/loading";
import BreadCrumb from "../General/BreadCrumb";
import ProductSwiper from "./ProductSwiper";
import RelatesdProducts from "./RelatesdProducts";
import ProductDetails from "./ProductDetails";
export default function ProductWrapper({ id }) {
  const { data, isLoading } = useGetProductData(id);
  console.log(data);
  return (
    <div className="home-page-content">
      {
        isLoading ? <Loading /> :
          <section>
            <BreadCrumb firstLink={`/category/${data.category.id}`} first={data.category.name} second={data.name} secondLink={`/product/${id}`} />
            <div className="container">
              <div className="upper-cont">
                <ProductSwiper data={data} />
                <ProductDetails data={data} />
              </div>
              {
                data.related_products_data.length > 0 && <RelatesdProducts data={data} />
              }
            </div>
          </section>
      }
    </div>
  )
}
