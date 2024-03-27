import { ICurrentDayData, IFiveDayData } from "@/Interfaces/Interfaces";

export const CurrentApiCall = async (a: any, b: any, c: string) => {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=${c}&units=imperial`)
  const data: ICurrentDayData = await promise.json()
  return data;
}

export const FiveDayApiCall = async (a:any, b:any, c:string) => {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${a}&lon=${b}&appid=${c}&units=imperial`)
  const data: IFiveDayData = await promise.json();
  return data;
}

export const SearchCurrentApiCall = async(cityName:string, k:string) => {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${k}&units=imperial`)
  const data:ICurrentDayData = await promise.json();
  return data;
}

export const SearchFiveDayApiCall = async (cityName:string, k:string) => {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${k}&units=imperial`)
  const data = await promise.json();
  return data;
}