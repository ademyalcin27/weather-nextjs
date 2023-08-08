import LocationOnIcon from "@mui/icons-material/LocationOn";

export interface LocationProps {
  name: string;
  region: string;
}
export default function Location({name, region}: LocationProps) {
  return (
    <div>
        <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
          <LocationOnIcon />
          <span>
            {name}, {region}
          </span>
        </div>
    </div>
  )

}