"use client";
import React, { useState } from "react";
import TodayCard from "../components/Today/TodayCard";
import Input from "../components/Common/Input";
import WeekForecast from "../components/WeekForecast/WeekForecast";
import { API_URL } from "@/constant/url";
import useDataFetching from "@/hooks/useFetch";
import InfoCard from "@/components/Common/InfoCard";
import { Weather } from "@/model/weather";

export default function Home() {
  const [location, setLocation] = useState("");

  const url = `${API_URL}&q=${location}`;
  const { data, error,loading, fetchData } = useDataFetching<Weather>(url)
 
  function renderContent(data: Weather) {
    return (
      <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] gap-10">
        <TodayCard current={data.current} location={data.location} />
        <WeekForecast forecastday={data.forecast.forecastday} />
      </div>
    );
  }
  let infoComponent = null
  if (!data) {
    infoComponent = <InfoCard title="Welcome to the Weather App" description="Enter a city name to get the weather forecast" />

  }
  if(!loading && error) {
    throw new Error("City not found")
   } 

  return (
    <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
      <div className="flex flex-col md:flex-row justify-between items-center p-12">
        <Input handleSearch={() => fetchData()} setLocation={setLocation} />
        <h1 className="mb-8 md:mb-0 order-1 text-white text-2xl py-2 px-4 rounded-xl italic font-bold">
          Weather App.
        </h1>
      </div>
      {infoComponent}
      {data && renderContent(data)}
    </div>
  );
}