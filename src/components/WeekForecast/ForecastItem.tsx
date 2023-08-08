import { ForecastDay } from "@/model/weather"
import Image from "next/image";

interface ForecastDayProps {
  item: ForecastDay
}

export default function ForecastItem({item}: ForecastDayProps) {
  const date = new Date(item.date).toLocaleString("en-US", { weekday: "short" })
  return (
      <div className="flex justify-between items-center" aria-label={`Forecast for ${date}`}>
      <span className="font-semibold text-lg w-1/4">{new Date(item.date).toLocaleString("en-US", { weekday: "short" })}</span>
      <div className="flex items-center justify-end w-1/4 pr-10">
        <span className="font-semibold">  {item.day.maxtempC.toFixed()}°</span>
        <Image
          className="w-50 h-50"
          src={`https:${item.day.condition.icon}`}
          alt={item.day.condition.text}
          aria-label={item.day.condition.text}
          width={32}
          height={32}
        />
      </div>
      <span className="font-semibold text-lg w-1/4 text-right"> {item.day.mintempC.toFixed()}° /  {item.day.maxtempC.toFixed()}°</span>
    </div>
  )
}