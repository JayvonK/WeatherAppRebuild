import React from 'react'

const CityBoxComponent = (props: {currentDayIcon: string, isFav: boolean, currentName: string, star: string, handleFavoriteClick: () => void, starOutline: string, currentTemp: number, farenheitClass: string, handleFarenheit: () => void, celciusClass: string, handleCelcius: () => void, currentDescription: string}) => {
  return (
    <div className="sm:p-8 p-4 boxTwoBg w-full rounded-3xl sm:mb-20 mb-10 relative">

              <img className="absolute sm:-left-12 sm:-top-7 lg:w-40 sm:w-32 w-24 -left-8 -top-3" src={props.currentDayIcon} alt="" />

              <h1 className="josefin text-center text-white lg:text-6xl text-5xl font-bold mb-8 z-20 relative px-10 sm:leading-normal md:block hidden">Current Weather</h1>

              <div className="flex justify-center mb-8 gap-4">
                <h3 className="text-white text-center josefin sm:leading-normal md:mt-0 md:font-normal md:text-4xl sm:text-5xl text-3xl mt-10 font-bold">{props.currentName}</h3>
                {props.isFav ? (
                  <img className="hover: cursor-pointer pb-2 md:relative absolute md:right-0 md:top-0 right-4 top-4" src={props.star} alt="" onClick={props.handleFavoriteClick} />
                ) : (
                  <img className="hover: cursor-pointer pb-2 md:relative absolute md:right-0 md:top-0 right-4 top-4" src={props.starOutline} alt="" onClick={props.handleFavoriteClick} />
                )
                }
              </div>

              <div className="sm:mb-10 mb-6 flex justify-center">
                <h1 className="josefin sm:text-9xl text-7xl text-center text-white">{props.currentTemp}</h1>
                <div className="flex ml-4 sm:h-14 h-8">
                  <h2 className={"josefin hover:text-white hover:cursor-pointer fontTransition " + props.farenheitClass} onClick={props.handleFarenheit}>°F</h2>
                  <div className="line mx-3"></div>
                  <h2 className={"josefin hover:text-white hover:cursor-pointer fontTransition " + props.celciusClass} onClick={props.handleCelcius}>°C</h2>
                </div>
              </div>

              <h1 className="text-white josefin sm:text-5xl text-3xl text-center mb-4">{props.currentDescription}</h1>

            </div>
  )
}

export default CityBoxComponent
