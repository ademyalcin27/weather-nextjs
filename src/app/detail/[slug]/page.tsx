"use client";
import React, { useEffect } from "react";
import WeatherDetails from "@/components/WeatherDetail/WeatherDetails";
import { API_URL } from "@/constant/url";
import useDataFetching from "@/hooks/useFetch";
import InfoCard from "@/components/Common/InfoCard";
import { Weather } from "@/model/weather";
import Link from "next/link";
import ArrowIcon from "@mui/icons-material/ArrowLeft";

export default function Page({ params }: { params: { slug: string } }) {
  const url = `${API_URL}&q=${params.slug}`;
  const { data, error, loading, fetchData } = useDataFetching<Weather>(url)

  useEffect(() => {
    fetchData()
  }, [])
  let infoComponent = null
  if (!data) {
    infoComponent = <InfoCard title="Welcome to the Weather App" description="Enter a city name to get the weather forecast" />
  }
  if(!loading && error) {
   throw new Error("City not found")
  } 

  return (
    <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
      <div className="flex flex-col md:flex-row justify-between items-center p-6">
        <h1 className="mb-8 md:mb-0 order-1 text-white text-2xl py-2 px-4 rounded-xl italic font-bold">
          <Link href='/' className="mr-2 text-sm font-medium text-green-700 hover:underline"> <ArrowIcon />Back </Link> 
          {params.slug.toUpperCase()} Weather Details
        </h1>
      </div>
      {infoComponent}
      {data && <WeatherDetails current={data.current} forecastday={data.forecast.forecastday}/>}
    </div>
  );
}