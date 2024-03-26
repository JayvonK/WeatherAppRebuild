import { ICurrentDayData } from "@/Interfaces/Interfaces";

export const CurrentApiCall = async (a: any, b: any, c: string) => {
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=${c}&units=imperial`)
  const data: ICurrentDayData = await promise.json()
  return data;
}