import { getCurrentDate } from "../../utils/currentDate";
import Location, { LocationProps } from "@/components/Today/Location";
import Image from "next/image";
import { Degree, DegreeProps } from "./Degree";
import Link from "next/link";

interface TodayCardProps {
  current?: DegreeProps;
  location?: LocationProps
}

const TodayCard = ({ current, location }: TodayCardProps) => {
  const weatherIcon = current ? `https:${current.condition.icon }`: null;
  const currentDate = getCurrentDate();

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/25 p-6 rounded-xl">
      <div className="flex items-center">
        <div>
          <div className="flex">
            <h1 className="text-3xl text-white">Today</h1>
            <Link type="button" href={`detail/${location?.name.toLowerCase()}`} className="ml-2 font-medium text-green-400 hover:underline">Detail</Link>
          </div>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <Image loading="lazy" className="w-[50px] object-cover" src={weatherIcon} alt="Weather Icon" width={64} height={64} />
          </div>
        )}
      </div>
      { current && <Degree tempC={current.tempC} condition={current.condition}/>}
      {location && <Location name={location.name} region={location.region}/>}
    </div>
  );
};

export default TodayCard;