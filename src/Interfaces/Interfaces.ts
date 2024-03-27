export interface ICurrentDayData {
  weather: CurrWeatherObject[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  name: string;
}

type CurrWeatherObject = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

interface FiveDayData {}

export interface IFiveDayData {
  list: FiveDayObject[];
  city: {
    name: string;
    population: string;
  };
}

type FiveDayObject = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    description: string,
    icon: string
  }[];
  wind: {
    speed: number
  };
  dt_txt: string 
};
