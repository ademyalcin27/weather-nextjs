import { ForecastDay } from "@/model/weather";
import ForecastItem from "./ForecastItem";

interface WeekForecastProps {
  forecastday: ForecastDay[]
}

const WeekForecast = ({ forecastday }: WeekForecastProps) => {

  return (
  <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
		{ forecastday.map((day, index) => ( <ForecastItem key={index} item={day} />)) }
	</div>
  )
};

export default WeekForecast;