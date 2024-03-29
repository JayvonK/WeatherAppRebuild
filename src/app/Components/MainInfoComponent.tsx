import React from 'react'

const MainInfoComponent = (props: {thermometer: string, currentMaxTemp: number, degreeSymbol: string, currentWind: number, currentMinTemp: number, currentHumidity: number }) => {
    return (
        <div className="sm:px-3 xl:mb-14 sm:mb-20 mb-14">
            <div className="grid 2xl:grid-cols-2 2xl:gap-0 xl:gap-8 xl:grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="grid grid-rows-2 gap-8">
                    {/* Max Temp */}
                    <div className="grid grid-cols-[40%_20%_40%]">

                        <div className="flex justify-end">
                            <div className="flex items-center">
                                <p className="josefin text-white sm:text-3xl text-2xl">Max</p>
                                <img className="ml-3 sm:block hidden" src={props.thermometer} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="line min-h-[48px]"></div>
                        </div>
                        <div className="flex items-center">
                            <p className="josefin text-white sm:text-3xl text-2xl">{props.currentMaxTemp + "°" + props.degreeSymbol}</p>
                        </div>

                    </div>

                    {/* Wind */}
                    <div className="grid grid-cols-[40%_20%_40%]">

                        <div className="flex justify-end">
                            <div className="flex items-center">
                                <p className="josefin text-white sm:text-3xl text-2xl">Wind</p>
                                <img className="ml-3 sm:block hidden" src={props.thermometer} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="line min-h-[48px]"></div>
                        </div>
                        <div className="flex items-center">
                            <p className="josefin text-white sm:text-3xl text-2xl">{props.currentWind + 'm/s'}</p>
                        </div>

                    </div>

                </div>
                <div className="grid grid-rows-2 gap-8">
                    {/* Max Temp */}
                    <div className="grid 2xl:grid-cols-[50%_20%_30%] grid-cols-[40%_20%_40%]">

                        <div className="flex justify-end">
                            <div className="flex items-center">
                                <p className="josefin text-white sm:text-3xl text-2xl">Min</p>
                                <img className="ml-3 sm:block hidden" src={props.thermometer} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="line min-h-[48px]"></div>
                        </div>
                        <div className="flex items-center">
                            <p className="josefin text-white sm:text-3xl text-2xl">{props.currentMinTemp + "°" + props.degreeSymbol}</p>
                        </div>
                    </div>

                    {/* Wind */}
                    <div className="grid 2xl:grid-cols-[50%_20%_30%] grid-cols-[40%_20%_40%]">

                        <div className="flex justify-end">
                            <div className="flex items-center">
                                <p className="josefin text-white sm:text-3xl text-2xl">Humidity</p>
                                <img className="ml-3 sm:block hidden" src={props.thermometer} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="line min-h-[48px]"></div>
                        </div>
                        <div className="flex items-center">
                            <p className="josefin text-white sm:text-3xl text-2xl">{props.currentHumidity + '%'}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default MainInfoComponent
