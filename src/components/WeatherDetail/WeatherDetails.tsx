import { ForecastDay, Today } from "@/model/weather";
import { DetailItem } from "@/components/WeatherDetail/DetailItem";

interface WeatherDetailsProps {
    current: Today;
    forecastday: ForecastDay[];
}

const WeatherDetails = ({ current, forecastday }: WeatherDetailsProps) => {

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic font-bold">
        <DetailItem title="Wind Speed" info={current.windMph} unit="mph" />
        <DetailItem title="Humidity" info={current.humidity} unit="&" />
        <DetailItem title="Wind Direction" info={current.windDir}/>
        <DetailItem title="Sunrise" info={forecastday[0]?.astro.sunrise}/>
        <DetailItem title="Sunset" info={forecastday[0]?.astro.sunset}/>
        <DetailItem title="Air Pressure" info={current.pressureMb} unit="hPa" />
        <DetailItem title="Feels Like" info={current.feelslikeF} unit="°" />
        <DetailItem title="Visibility" info={current.visKm} unit="km" />
      </div>
    </div>
  );
};

export default WeatherDetails;