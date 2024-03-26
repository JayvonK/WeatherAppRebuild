'use client'

import Image from "next/image";
import star from '../../public/images/star-fill.svg';
import thermometer from '../../public/images/thermometer-fill.svg';
import calender from '../../public/images/calendar-blank-fill.svg';
import arrDown from '../../public/images/caret-down-bold.svg'
import { Accordion, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import WeekDayComponent from "./Components/WeekDayComponent";
import sun from '../../public/images/sun-fill.svg'
import { CurrentApiCall } from "@/Data/DataServices";
import { ICurrentDayData } from "@/Interfaces/Interfaces";
import { key } from "@/utils/environment";
import WeatherDataCopy from '@/utils/WeatherCopy.json'

export default function Home() {

  const [dayOne, setDayOne] = useState<boolean>(false);
  const [currentName, setCurrentName] = useState<string>()
  const [currentTemp, setCurrentTemp] = useState<number>();
  const [currentMinTemp, setCurrentMinTemp] = useState<number>();
  const [currentMaxTemp, setCurrentMaxTemp] = useState<number>();
  const [currentWind, setCurrentWind] = useState<number>();
  const [currentHumidity, setCurrentHumidity] = useState<number>();
  const [farenheitBool, setFarenheitBool] = useState<boolean>(true);
  const [currentDescription, setCurrentDescription] = useState<string>('');
  const [farenheitClass, setFarenheitClass] = useState<string>('text-6xl text-white')
  const [celciusClass, setCelciusClass] = useState<string>('text-5xl tempGray');
  const [degreeSymbol, setDegreeSymbol] = useState<string>('F');
  const [currentWeatherData, setCurrentWeatherData] = useState<ICurrentDayData>();

  const handleFarenheit = () => {
    setFarenheitBool(true);
    setFarenheitClass('text-6xl text-white');
    setCelciusClass('text-5xl tempGray');
    setDegreeSymbol('F');
  }

  const handleCelcius = () => {
    setFarenheitBool(false);
    setCelciusClass('text-6xl text-white');
    setFarenheitClass('text-5xl tempGray');
    setDegreeSymbol('C');
    console.log("hei");
    
    console.log(currentWeatherData);
  }

  const handleDayOne = () => {
    setDayOne(!dayOne);
  }

  const setEverything = (currentWeatherData: ICurrentDayData) => {
    let maxTemp: number = Math.floor(currentWeatherData.main.temp);
      let temp: number = Math.floor(currentWeatherData.main.temp);
      let minTemp: number = Math.floor(currentWeatherData.main.temp_min);
      let description: string = currentWeatherData.weather[0].description;
      let wind: number = currentWeatherData.wind.speed;
      let humidity: number = Math.floor(currentWeatherData.main.humidity);
      let name: string = currentWeatherData.name;
      setCurrentTemp(temp);
      setCurrentMaxTemp(maxTemp);
      setCurrentMinTemp(minTemp);
      setCurrentDescription(description);
      setCurrentWind(wind);
      setCurrentHumidity(humidity);
      setCurrentName(name);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    async function success(pos: {
      coords: { latitude: any; longitude: any };
    }) {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      setCurrentWeatherData(await CurrentApiCall(lat, long, key));

      console.log(lat + " " + long)
    }

    function error(error: { message: string }) {
      // setCurrentWeatherData(await CurrentApiCall(lat, long, key));
      console.log(error.message);
    }

   currentWeatherData && setEverything(currentWeatherData);
    console.log("working");
  }, [farenheitBool])

  return (
    <div className="min-h-screen weatherBg px-16 py-8">
      <div className="boxBg h-full w-full py-10 px-10 rounded-2xl">

        {/* First row of the page */}
        <div className="grid xl:grid-cols-[52%_6%_42%] mb-8">

          <div className="relative">
            <input className="min-h-12 w-full rounded-[25px]" type="text" placeholder="Search for a city" />

            {/* <h2 className="min-h-12 bg-white absolute w-full">mf</h2> */}
          </div>

          <div>

          </div>


          <div>

          </div>

        </div>


        {/* Second Row of the page */}

        {/* The First Column, CURRENT WEATHER*/}
        <div className="grid xl:grid-cols-[50%_6%_44%]">
          <div>

            {/* The first box */}
            <div className="p-8 boxTwoBg w-full rounded-3xl mb-20">

              <h1 className="josefin text-center text-white text-6xl font-bold mb-8">Current Weather</h1>

              <div className="flex justify-center">

                <h3 className="text-white josefin text-4xl mb-8">{currentName}</h3>

                <img src={star.src} alt="" />

              </div>

              <div className="mb-10 flex justify-center">
                <h1 className="josefin text-9xl text-center text-white">{currentTemp}</h1>
                <div className="flex ml-4 h-14">
                  <h2 className={"josefin hover:text-white hover:cursor-pointer fontTransition " + farenheitClass} onClick={handleFarenheit}>°F</h2>
                  <div className="line mx-3"></div>
                  <h2 className={"josefin hover:text-white hover:cursor-pointer fontTransition " + celciusClass} onClick={handleCelcius}>°C</h2>
                </div>
              </div>

              <h1 className="text-white josefin text-5xl text-center mb-4">{currentDescription}</h1>

            </div>


            {/* Other info max temp, low temp, etc */}

            <div className="px-3 mb-14">
              <div className="grid 2xl:grid-cols-2 2xl:gap-0 xl:gap-8 xl:grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="grid grid-rows-2 gap-8">
                  {/* Max Temp */}
                  <div className="grid grid-cols-[40%_20%_40%]">

                    <div className="flex justify-end">
                      <div className="flex items-center">
                        <p className="josefin text-white text-3xl">Max</p>
                        <img className="ml-3" src={thermometer.src} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="line min-h-[48px]"></div>
                    </div>
                    <div className="flex items-center">
                      <p className="josefin text-white text-3xl">{currentMaxTemp && currentMaxTemp + "° " + degreeSymbol}</p>
                    </div>

                  </div>

                  {/* Wind */}
                  <div className="grid grid-cols-[40%_20%_40%]">

                    <div className="flex justify-end">
                      <div className="flex items-center">
                        <p className="josefin text-white text-3xl">Wind</p>
                        <img className="ml-3" src={thermometer.src} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="line min-h-[48px]"></div>
                    </div>
                    <div className="flex items-center">
                      <p className="josefin text-white text-3xl">{currentWind && currentWind + 'm/s'}</p>
                    </div>

                  </div>

                </div>
                <div className="grid grid-rows-2 gap-8">
                  {/* Max Temp */}
                  <div className="grid 2xl:grid-cols-[50%_20%_30%] grid-cols-[40%_20%_40%]">

                    <div className="flex justify-end">
                      <div className="flex items-center">
                        <p className="josefin text-white text-3xl">Min</p>
                        <img className="ml-3" src={thermometer.src} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="line min-h-[48px]"></div>
                    </div>
                    <div className="flex items-center">
                      <p className="josefin text-white text-3xl">{currentMinTemp && currentMinTemp + "° " + degreeSymbol}</p>
                    </div>
                  </div>

                  {/* Wind */}
                  <div className="grid 2xl:grid-cols-[50%_20%_30%] grid-cols-[40%_20%_40%]">

                    <div className="flex justify-end">
                      <div className="flex items-center">
                        <p className="josefin text-white text-3xl">Humidity</p>
                        <img className="ml-3" src={thermometer.src} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="line min-h-[48px]"></div>
                    </div>
                    <div className="flex items-center">
                      <p className="josefin text-white text-3xl">{ currentHumidity && currentHumidity + '%'}</p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* THE LINE */}
          <div className="xl:flex justify-center hidden">
            <div className="line"></div>
          </div>

          {/* SECOND COLUMN 5 DAY FORECAST */}
          <div className="p-8 boxTwoBg w-full rounded-3xl min-h-[785px] overflow-y-scroll">

            <div className="flex items-center">
              <img className="min-h-[90px] pb-2" src={calender.src} alt="" />
              <h1 className="josefin text-white text-[66px] font-bold text-center w-full">5 Day Forecast</h1>
            </div>

            <hr className="my-10" />


            {/* THE ACCORDION */}
            <WeekDayComponent bool={dayOne} handleDay={handleDayOne} weatherIcon={sun.src} />

          </div>
        </div>
      </div>
    </ div >
  );
}
