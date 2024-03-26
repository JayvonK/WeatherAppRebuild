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

export default function Home() {

  const [dayOne, setDayOne] = useState<boolean>(false);
  const [currentTemp, setCurrentTemp] = useState<number>(65);

  const handleDayOne = () => {
    setDayOne(!dayOne);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    async function success(pos: {
      coords: { latitude: any; longitude: any };
    }) {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      console.log(lat + " " + long)
    }

    function error(error: { message: string }) {
      console.log(error.message);
    }

  }, [])

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

                <h3 className="text-white josefin text-4xl mb-8">Stockton, CA</h3>

                <img src={star.src} alt="" />

              </div>

              <div className="mb-10 flex justify-center">
                <h1 className="josefin text-9xl text-center text-white">{currentTemp}</h1>
                <div className="flex ml-4 items-end">
                  <h2 className="josefin text-white text-[60px]">°F</h2>
                  <div className="line mx-3"></div>
                  <h2 className="josefin text-white text-5xl tempGray">°C</h2>
                </div>
              </div>

              <h1 className="text-white josefin text-5xl text-center mb-4">Clear Sky</h1>

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
                      <p className="josefin text-white text-3xl">65°F</p>
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
                      <p className="josefin text-white text-3xl">10m/s</p>
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
                      <p className="josefin text-white text-3xl">45°F</p>
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
                      <p className="josefin text-white text-3xl">15%</p>
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
            <WeekDayComponent bool={dayOne} handleDay={handleDayOne} weatherIcon={sun.src}/>



          </div>
        </div>
      </div>
    </ div >
  );
}
