
"use client"
import ProductWrapper from '@/components/product/ProductWrapper'
import { useParams } from 'next/navigation';
import React from 'react'
export default function Page() {
    const { id } = useParams();
  return (
    <ProductWrapper id={id}/>
  )
}