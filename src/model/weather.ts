export interface Condition {
  text: string;
  icon: string;
  code: number;
}
export interface Today {
  lastUpdatedEpoch: number;
  tempF: number;
  tempC: number;
  condition: Condition;
  humidity: number;
  cloud: number;
  viskm: number;
  windMph: number;
  windDir: string;
  pressureMb: number;
  feelslikeF: number;
  visKm: number;
}
export interface Astro {
  sunrise: string;
  sunset: string;
}
export interface ForecastDay {
  date: string;
  astro: Astro;
  day: {
    condition: Condition;
    maxtempF: number;
    mintempF: number;
    maxtempC: number;
    mintempC: number;
  };
}

interface LocationInfo {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}
export interface Weather {
  current: Today;
  forecast: {
    forecastday: ForecastDay[];
  };
  location: LocationInfo;

}