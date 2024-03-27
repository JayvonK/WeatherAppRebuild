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

export interface IFiveDayData {
  list: FiveDayObject[];
  city: {
    name: string;
    country: string;
    population: number;
  };
}

type FiveDayObject = {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: weatherObject[];
  wind: {
    speed: number;
  };
  dt_txt: string;
};

type weatherObject = {
  description: string;
  icon: string;
};

