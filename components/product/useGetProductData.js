'use client';
import axios from "axios";
import { API_BASE_URL } from "@/lib/apiConfig";
import { useQuery } from "@tanstack/react-query";
const fetchProductData = async (id) => {
  const token = localStorage.getItem("token");
  const headers = { "accept-language": "ar", };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await axios.get(
    `${API_BASE_URL}/products/${id}`,
    { headers }
  );
  return response.data.data;

}

export const useGetProductData = (id) => {

  const query = useQuery({
    queryKey: ["productData" + id],
    queryFn: () => fetchProductData(id),
    // only run when we have lang and a country id
    // enabled: Boolean(lang) && (country !== undefined && country !== null),
    staleTime: 1000 * 60, // 1 minute (adjust as you want)
    cacheTime: 1000 * 60 * 5,
  });

  return query;
};
