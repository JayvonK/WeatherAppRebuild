import React from 'react'
import star from '../../../public/images/star-fill.svg';
import thermometer from '../../../public/images/thermometer-fill.svg';
import calender from '../../../public/images/calendar-blank-fill.svg';
import humid from '../../../public/images/drop-half-bold.svg';
import thermometer2 from '../../../public/images/thermometer-bold.svg';
import thermometer3 from '../../../public/images/thermometer-cold-bold.svg';
import wind from '../../../public/images/wind-bold.svg';
import arrDown from '../../../public/images/caret-down-bold.svg';


const WeekDayComponent = (props: { bool: boolean, handleDay: () => void, weatherIcon: string, dayName: string, maxTemp: number, minTemp: number, wind: number, humidity: number, description: string, handleFarenheit: () => void, handleCelcius: () => void, farenheitClass: string, celciusClass: string }) => {
  return (
    <div>
      {
        props.bool ? (
          // Open Accordion
          <div className="transition">
            <div className="flex items-center justify-end pb-2">
              <img src={arrDown.src} className={"w-16 rotateArrow hover:cursor-pointer"} alt="" onClick={props.handleDay} />
            </div>


            <div className="grid md:grid-cols-[35%_65%] grid-cols-[45%_55%]">
              {/* Left Side General Info */}
              <div >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white md:text-[40px] text-3xl josefin">{props.dayName}</h3>
                  <img className="2xl:w-20 xl:w-16 md:w-20 sm:w-14 w-10 pb-2" src={props.weatherIcon} alt="" />
                </div>
                <div className='flex'>
                  <h3 className="text-white md:text-[64px] sm:text-6xl text-4xl josefin mb-6">{props.maxTemp}</h3>
                  <div className="flex sm:ml-4 ml-2 h-8">
                    <h2 className={"josefin hover:text-white hover:cursor-pointer fontTransition " + props.farenheitClass} onClick={props.handleFarenheit}>°F</h2>
                    <div className="line sm:mx-3 mx-2"></div>
                    <h2 className={"josefin hover:text-white hover:cursor-pointer fontTransition " + props.celciusClass} onClick={props.handleCelcius}>°C</h2>
                  </div>
                </div>
                <h3 className="text-white md:text-[40px] sm:text-3xl text-2xl josefin sm:leading-normal">{props.description}</h3>
              </div>

              {/* Right Side 4 Pieces of Info */}
              <div className="grid grid-rows-4 gap-4">
                <div className="grid grid-cols-[45%_10%_45%]">
                  <div className="flex justify-end">
                    <img className="sm:w-8 w-6" src={thermometer2.src} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <div className="line"></div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-white josefin sm:text-2xl text-xl">{props.maxTemp} F</p>
                  </div>
                </div>

                <div className="grid grid-cols-[45%_10%_45%]">
                  <div className="flex justify-end">
                    <img className="sm:w-8 w-6" src={thermometer3.src} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <div className="line"></div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-white josefin sm:text-2xl text-xl">{props.minTemp} F</p>
                  </div>
                </div>

                <div className="grid grid-cols-[45%_10%_45%]">
                  <div className="flex justify-end">
                    <img className="sm:w-8 w-6" src={wind.src} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <div className="line"></div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-white josefin sm:text-2xl text-xl">{props.wind}m/s</p>
                  </div>
                </div>

                <div className="grid grid-cols-[45%_10%_45%]">
                  <div className="flex justify-end">
                    <img className="sm:w-8 w-6" src={humid.src} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <div className="line"></div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-white josefin sm:text-2xl text-xl">{props.humidity}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-[35%_55%_10%] grid-cols-[40%_40%_20%]" >
            {/* Week day */}
            <div className="flex justify-between items-center">
              <h3 className="josefin 2xl:text-[40px] sm:text-4xl text-3xl text-white">{props.dayName}</h3>
              <img className="2xl:w-16 sm:w-12 w-8" src={props.weatherIcon} alt="" />
            </div>

            {/* High and low Temp */}
            <div className="sm:flex sm:items-center sm:justify-center grid grid-rows-2">
              <h3 className="2xl:text-5xl xl:text-4xl md:text-5xl sm:text-4xl text-3xl text-white josefin text-center sm:block hidden">H: {props.maxTemp} <span className="text-[#A8A8A8]">L: {props.minTemp}</span></h3>
              <div className="text-white josefin text-2xl sm:hidden block">
                <h3 className='text-center'>H: {props.maxTemp}</h3>
              </div>
              <div className="text-[#A8A8A8] josefin text-2xl sm:hidden block">
                <h3 className='text-center'>L: {props.minTemp}</h3>
              </div>
            </div>
            <div className="flex items-center justify-end pb-2">
              <img src={arrDown.src} className="w-16 hover:cursor-pointer" alt="" onClick={props.handleDay} />
            </div>
          </div>
        )}
    </div>
  )
}

export default WeekDayComponent
