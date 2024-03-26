'use client'

import Image from "next/image";
import star from '../../public/images/star-fill.svg';
import thermometer from '../../public/images/thermometer-fill.svg';
import calender from '../../public/images/calendar-blank-fill.svg';
import arrDown from '../../public/images/caret-down-bold.svg'
import { Accordion, Dropdown } from "flowbite-react";
import { useState } from "react";

export default function Home() {

  const [dayOne, setDayOne] = useState<boolean>(false);

  const handleDayOne = () => {
    setDayOne(!dayOne);
  }


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

              <div className="mb-10">
                <h1 className="josefin text-9xl text-center text-white">62</h1>
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
            {
              dayOne ? (
                // Open Accordion
                <div className="transition hover:cursor-pointer" onClick={handleDayOne}>
                  <div className="flex items-center justify-end pb-2">
                    <img src={arrDown.src} className={dayOne ? "w-16 rotateArrow" : "w-16"} alt="" />
                  </div>


                  <div className="grid grid-cols-[35%_65%]">
                    {/* Left Side General Info */}
                    <div >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white text-5xl josefin">Mon</h3>
                        <img className="w-20" src={calender.src} alt="" />
                      </div>
                      <div>
                        <h3 className="text-white text-7xl josefin mb-6">65</h3>
                      </div>
                      <h3 className="text-white text-5xl josefin">Clear Sky</h3>
                    </div>

                    {/* Right Side 4 Pieces of Info */}
                    <div className="grid grid-rows-4 gap-4">
                      <div className="grid grid-cols-[45%_10%_45%]">
                        <div className="flex justify-end">
                          <img className="w-8" src={thermometer.src} alt="" />
                        </div>
                        <div className="flex justify-center">
                          <div className="line"></div>
                        </div>
                        <div className="flex items-center">
                          <p className="text-white josefin text-2xl">65 F</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[45%_10%_45%]">
                        <div className="flex justify-end">
                          <img className="w-8" src={thermometer.src} alt="" />
                        </div>
                        <div className="flex justify-center">
                          <div className="line"></div>
                        </div>
                        <div className="flex items-center">
                          <p className="text-white josefin text-2xl">65 F</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[45%_10%_45%]">
                        <div className="flex justify-end">
                          <img className="w-8" src={thermometer.src} alt="" />
                        </div>
                        <div className="flex justify-center">
                          <div className="line"></div>
                        </div>
                        <div className="flex items-center">
                          <p className="text-white josefin text-2xl">65 F</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[45%_10%_45%]">
                        <div className="flex justify-end">
                          <img className="w-8" src={thermometer.src} alt="" />
                        </div>
                        <div className="flex justify-center">
                          <div className="line"></div>
                        </div>
                        <div className="flex items-center">
                          <p className="text-white josefin text-2xl">65 F</p>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-[35%_45%_20%] hover:cursor-pointer" onClick={handleDayOne}>
                  {/* Week day */}
                  <div className="flex justify-between items-center">
                    <h3 className="josefin text-5xl text-white">Mon</h3>
                    <img className="w-16" src={calender.src} alt="" />
                  </div>

                  {/* High and low Temp */}
                  <div className="flex items-center justify-center">
                    <h3 className="text-5xl text-white josefin text-center">H: 65 <span className="text-[#A8A8A8]">L: 45</span></h3>
                  </div>
                  <div className="flex items-center justify-end pb-2">
                    <img src={arrDown.src} className="w-16" alt="" />
                  </div>
                </div>
              )
            }




          </div>
        </div>
      </div>
    </ div >
  );
}
