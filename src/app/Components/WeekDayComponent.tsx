import React from 'react'
import star from '../../../public/images/star-fill.svg';
import thermometer from '../../../public/images/thermometer-fill.svg';
import calender from '../../../public/images/calendar-blank-fill.svg';
import humid from '../../../public/images/drop-half-bold.svg';
import thermometer2 from '../../../public/images/thermometer-bold.svg';
import thermometer3 from '../../../public/images/thermometer-cold-bold.svg';
import wind from '../../../public/images/wind-bold.svg';
import arrDown from '../../../public/images/caret-down-bold.svg';


const WeekDayComponent = (props: {bool: boolean, handleDay: () => void, weatherIcon: string}) => {
  return (
    <div>
      {
      props.bool ? (
                // Open Accordion
                <div className="transition hover:cursor-pointer" onClick={props.handleDay}>
                  <div className="flex items-center justify-end pb-2">
                    <img src={arrDown.src} className={props.bool ? "w-16 rotateArrow" : "w-16"} alt="" />
                  </div>


                  <div className="grid grid-cols-[35%_65%]">
                    {/* Left Side General Info */}
                    <div >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white text-5xl josefin">Mon</h3>
                        <img className="w-20" src={props.weatherIcon} alt="" />
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
                          <img className="w-8" src={thermometer2.src} alt="" />
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
                          <img className="w-8" src={thermometer3.src} alt="" />
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
                          <img className="w-8" src={wind.src} alt="" />
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
                          <img className="w-8" src={humid.src} alt="" />
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
                <div className="grid grid-cols-[35%_45%_20%] hover:cursor-pointer" onClick={props.handleDay}>
                  {/* Week day */}
                  <div className="flex justify-between items-center">
                    <h3 className="josefin text-5xl text-white">Mon</h3>
                    <img className="w-16" src={props.weatherIcon} alt="" />
                  </div>

                  {/* High and low Temp */}
                  <div className="flex items-center justify-center">
                    <h3 className="text-5xl text-white josefin text-center">H: 65 <span className="text-[#A8A8A8]">L: 45</span></h3>
                  </div>
                  <div className="flex items-center justify-end pb-2">
                    <img src={arrDown.src} className="w-16" alt="" />
                  </div>
                </div>
              )}
    </div>
  )
}

export default WeekDayComponent
