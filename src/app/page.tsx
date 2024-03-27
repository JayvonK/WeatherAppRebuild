'use client'

import Image from "next/image";
import star from '../../public/images/star-fill.svg';
import thermometer from '../../public/images/thermometer-fill.svg';
import calender from '../../public/images/calendar-blank-fill.svg';
import arrDown from '../../public/images/caret-down-bold.svg';
import sun from '../../public/images/sun-fill.svg'
import { Accordion, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import WeekDayComponent from "./Components/WeekDayComponent";
import { CurrentApiCall, FiveDayApiCall, SearchCurrentApiCall, SearchFiveDayApiCall } from "@/Data/DataServices";
import { ICurrentDayData, IFiveDayData } from "@/Interfaces/Interfaces";
import { key } from "@/utils/environment";
import WeatherDataCopy from '@/utils/WeatherCopy.json';
import FiveDayDataCopy from '@/utils/FiveDayWeatherCopy.json'
import { ConvertToCelsius, ConvertToFarenheit } from "@/utils/TempConverter";
import { GetDayOfWeek, GetWeekDays } from "@/utils/GetDaysOfWeek";
import { DescriptionFormat } from "@/utils/DescriptionFormat";
import { FindMostRepeated } from "@/utils/FindMostRepeated";

export default function Home() {

  const [dayOne, setDayOne] = useState<boolean>(false);
  const [dayTwo, setDayTwo] = useState<boolean>(false);
  const [dayThree, setDayThree] = useState<boolean>(false);
  const [dayFour, setDayFour] = useState<boolean>(false);
  const [dayFive, setDayFive] = useState<boolean>(false);

  const [currentName, setCurrentName] = useState<string>('')
  const [currentWind, setCurrentWind] = useState<number>(0);
  const [currentHumidity, setCurrentHumidity] = useState<number>(0);
  const [currentDayIcon, setCurrentDayIcon] = useState<string>('');
  const [farenheitBool, setFarenheitBool] = useState<boolean>(true);
  const [searchBool, setSearchBool] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>('');


  // ALL Temperature Classes
  const [currentTemp, setCurrentTemp] = useState<number>(0);
  const [currentMinTemp, setCurrentMinTemp] = useState<number>(0);
  const [currentMaxTemp, setCurrentMaxTemp] = useState<number>(0);
  const [farenheitTemp, setFarenheitTemp] = useState<number>(0);
  const [farenheitMaxTemp, setFarenheitMaxTemp] = useState<number>(0);
  const [farenheitMinTemp, setFarenheitMinTemp] = useState<number>(0);


  const [currentDescription, setCurrentDescription] = useState<string>('');
  const [farenheitClass, setFarenheitClass] = useState<string>('text-6xl text-white')
  const [celciusClass, setCelciusClass] = useState<string>('text-5xl tempGray');
  const [degreeSymbol, setDegreeSymbol] = useState<string>('F');
  const [currentWeatherData, setCurrentWeatherData] = useState<ICurrentDayData>(WeatherDataCopy);
  // const [currentLong, setCurrentLong] = useState('-121.275604');
  // const [currentLat, setCurrentLat] = useState('37.961632');

  const [fiveDayData, setFiveDayData] = useState<IFiveDayData>(FiveDayDataCopy);
  // All First Day State Variables
  const [firstDayName, setFirstDayName] = useState<string>('');
  const [firstDayMaxTemp, setFirstDayMaxTemp] = useState<number>(0);
  const [firstDayMinTemp, setFirstDayMinTemp] = useState<number>(0);
  const [firstDayTemp, setFirstDayTemp] = useState<number>(0);
  const [firstDayIcon, setFirstDayIcon] = useState<string>('');
  const [firstDayWind, setFirstDayWind] = useState<number>(0);
  const [firstDayHumidity, setFirstDayHumidity] = useState<number>(0);
  const [firstDayDescription, setFirstDayDescription] = useState<string>('');

  const [secondDayName, setSecondDayName] = useState<string>('');
  const [secondDayMaxTemp, setSecondDayMaxTemp] = useState<number>(0);
  const [secondDayMinTemp, setSecondDayMinTemp] = useState<number>(0);
  const [secondDayTemp, setSecondDayTemp] = useState<number>(0);
  const [secondDayIcon, setSecondDayIcon] = useState<string>('');
  const [secondDayWind, setSecondDayWind] = useState<number>(0);
  const [secondDayHumidity, setSecondDayHumidity] = useState<number>(0);
  const [secondDayDescription, setSecondDayDescription] = useState<string>('');

  const [thirdDayName, setThirdDayName] = useState<string>('');
  const [thirdDayMaxTemp, setThirdDayMaxTemp] = useState<number>(0);
  const [thirdDayMinTemp, setThirdDayMinTemp] = useState<number>(0);
  const [thirdDayTemp, setThirdDayTemp] = useState<number>(0);
  const [thirdDayIcon, setThirdDayIcon] = useState<string>('');
  const [thirdDayWind, setThirdDayWind] = useState<number>(0);
  const [thirdDayHumidity, setThirdDayHumidity] = useState<number>(0);
  const [thirdDayDescription, setThirdDayDescription] = useState<string>('');

  const [fourthDayName, setFourthDayName] = useState<string>('');
  const [fourthDayMaxTemp, setFourthDayMaxTemp] = useState<number>(0);
  const [fourthDayMinTemp, setFourthDayMinTemp] = useState<number>(0);
  const [fourthDayTemp, setFourthDayTemp] = useState<number>(0);
  const [fourthDayIcon, setFourthDayIcon] = useState<string>('');
  const [fourthDayWind, setFourthDayWind] = useState<number>(0);
  const [fourthDayHumidity, setFourthDayHumidity] = useState<number>(0);
  const [fourthDayDescription, setFourthDayDescription] = useState<string>('');

  const [fifthDayName, setFifthDayName] = useState<string>('');
  const [fifthDayMaxTemp, setFifthDayMaxTemp] = useState<number>(0);
  const [fifthDayMinTemp, setFifthDayMinTemp] = useState<number>(0);
  const [fifthDayTemp, setFifthDayTemp] = useState<number>(0);
  const [fifthDayIcon, setFifthDayIcon] = useState<string>('');
  const [fifthDayWind, setFifthDayWind] = useState<number>(0);
  const [fifthDayHumidity, setFifthDayHumidity] = useState<number>(0);
  const [fifthDayDescription, setFifthDayDescription] = useState<string>('');
  


  const handleFarenheit = () => {
    setFarenheitBool(true);
    setFarenheitClass('text-6xl text-white');
    setCelciusClass('text-5xl tempGray');
    setDegreeSymbol('F');
    setCurrentTemp(farenheitTemp);
    setCurrentMaxTemp(farenheitMaxTemp);
    setCurrentMinTemp(farenheitMinTemp);
  }

  const handleCelcius = () => {
    setFarenheitBool(false);
    setCelciusClass('text-6xl text-white');
    setFarenheitClass('text-5xl tempGray');
    setDegreeSymbol('C');
    console.log(currentWeatherData);
    setCurrentTemp(ConvertToCelsius(currentTemp));
    setCurrentMaxTemp(ConvertToCelsius(currentMaxTemp));
    setCurrentMinTemp(ConvertToCelsius(currentMinTemp));
  }

  const handleDayOne = () => {
    setDayOne(!dayOne);
  }

  const handleDayTwo = () => {
    setDayTwo(!dayTwo);
  }

  const handleDayThree = () => {
    setDayThree(!dayThree);
  }

  const handleDayFour = () => {
    setDayFour(!dayFour);
  }

  const handleDayFive = () => {
    setDayFive(!dayFive);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      setSearch(userInput, key)
      setUserInput("");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }

  const setInit = async (lat: any, long: any, key: string) => {
    let data: ICurrentDayData = await CurrentApiCall(lat, long, key);
    let FiveDayData: IFiveDayData = await FiveDayApiCall(lat, long, key);
    // let data: ICurrentDayData = currentWeatherData;
    // let FiveDayData: IFiveDayData = fiveDayData;

    // ALL OF CURRENT DAY DATA
    let maxTemp: number = Math.floor(data.main.temp_max);
    let temp: number = Math.floor(data.main.temp);
    let minTemp: number = Math.floor(data.main.temp_min);
    let description: string = data.weather[0].description;
    let wind: number = data.wind.speed;
    let humidity: number = Math.floor(data.main.humidity);
    let name: string = data.name + ", " + data.sys.country;
    setCurrentTemp(temp);
    setFarenheitTemp(temp);
    setCurrentMaxTemp(maxTemp);
    setFarenheitMaxTemp(maxTemp);
    setCurrentMinTemp(minTemp);
    setFarenheitMinTemp(minTemp);
    setCurrentDescription(DescriptionFormat(description));
    setCurrentWind(wind);
    setCurrentHumidity(humidity);
    setCurrentName(name);

    let firstDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[0]);
    let firstDayMaxTempArray = firstDayData.map(data => data.main.temp_max);
    let firstDayMinTempArray = firstDayData.map(data => data.main.temp_min);
    let firstDayWindArray = firstDayData.map(data => data.wind.speed);
    let firstDayHumidityArray = firstDayData.map(data => data.main.humidity);
    let firstDayDescriptionArray = firstDayData.map(data => data.weather[0].description);
    let firstDayIconArray = firstDayData.map(data => data.weather[0].icon);

    setFirstDayName(GetWeekDays()[0]);
    setFirstDayMaxTemp(Math.floor(Math.max(...firstDayMaxTempArray)));
    setFirstDayMinTemp(Math.floor(Math.min(...firstDayMinTempArray)));
    setFirstDayIcon(FindMostRepeated(firstDayIconArray));
    setFirstDayWind(Math.max(...firstDayWindArray));
    setFirstDayHumidity(Math.max(...firstDayHumidityArray));
    setFirstDayDescription(DescriptionFormat(FindMostRepeated(firstDayDescriptionArray)));

    let secondDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[1]);
    let secondDayMaxTempArray = secondDayData.map(data => data.main.temp_max);
    let secondDayMinTempArray = secondDayData.map(data => data.main.temp_min);
    let secondDayWindArray = secondDayData.map(data => data.wind.speed);
    let secondDayHumidityArray = secondDayData.map(data => data.main.humidity);
    let secondDayDescriptionArray = secondDayData.map(data => data.weather[0].description);
    let secondDayIconArray = secondDayData.map(data => data.weather[0].icon);

    setSecondDayName(GetWeekDays()[1]);
    setSecondDayMaxTemp(Math.floor(Math.max(...secondDayMaxTempArray)));
    setSecondDayMinTemp(Math.floor(Math.min(...secondDayMinTempArray)));
    setSecondDayIcon(FindMostRepeated(secondDayIconArray));
    setSecondDayWind(Math.max(...secondDayWindArray));
    setSecondDayHumidity(Math.max(...secondDayHumidityArray));
    setSecondDayDescription(DescriptionFormat(FindMostRepeated(secondDayDescriptionArray)));


    let thirdDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[2]);
    let thirdDayMaxTempArray = thirdDayData.map(data => data.main.temp_max);
    let thirdDayMinTempArray = thirdDayData.map(data => data.main.temp_min);
    let thirdDayWindArray = thirdDayData.map(data => data.wind.speed);
    let thirdDayHumidityArray = thirdDayData.map(data => data.main.humidity);
    let thirdDayDescriptionArray = thirdDayData.map(data => data.weather[0].description);
    let thirdDayIconArray = thirdDayData.map(data => data.weather[0].icon);

    setThirdDayName(GetWeekDays()[2]);
    setThirdDayMaxTemp(Math.floor(Math.max(...thirdDayMaxTempArray)));
    setThirdDayMinTemp(Math.floor(Math.min(...thirdDayMinTempArray)));
    setThirdDayIcon(FindMostRepeated(thirdDayIconArray));
    setThirdDayWind(Math.max(...thirdDayWindArray));
    setThirdDayHumidity(Math.max(...thirdDayHumidityArray));
    setThirdDayDescription(DescriptionFormat(FindMostRepeated(thirdDayDescriptionArray)));


    let fourthDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[3]);
    let fourthDayMaxTempArray = fourthDayData.map(data => data.main.temp_max);
    let fourthDayMinTempArray = fourthDayData.map(data => data.main.temp_min);
    let fourthDayWindArray = fourthDayData.map(data => data.wind.speed);
    let fourthDayHumidityArray = fourthDayData.map(data => data.main.humidity);
    let fourthDayDescriptionArray = fourthDayData.map(data => data.weather[0].description);
    let fourthDayIconArray = fourthDayData.map(data => data.weather[0].icon);

    setFourthDayName(GetWeekDays()[3]);
    setFourthDayMaxTemp(Math.floor(Math.max(...fourthDayMaxTempArray)));
    setFourthDayMinTemp(Math.floor(Math.min(...fourthDayMinTempArray)));
    setFourthDayIcon(FindMostRepeated(fourthDayIconArray));
    setFourthDayWind(Math.max(...fourthDayWindArray));
    setFourthDayHumidity(Math.max(...fourthDayHumidityArray));
    setFourthDayDescription(DescriptionFormat(FindMostRepeated(fourthDayDescriptionArray)));

    let fifthDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[4]);
    let fifthDayMaxTempArray = fifthDayData.map(data => data.main.temp_max);
    let fifthDayMinTempArray = fifthDayData.map(data => data.main.temp_min);
    let fifthDayWindArray = fifthDayData.map(data => data.wind.speed);
    let fifthDayHumidityArray = fifthDayData.map(data => data.main.humidity);
    let fifthDayDescriptionArray = fifthDayData.map(data => data.weather[0].description);
    let fifthDayIconArray = fifthDayData.map(data => data.weather[0].icon);

    setFifthDayName(GetWeekDays()[4]);
    setFifthDayMaxTemp(Math.floor(Math.max(...fifthDayMaxTempArray)));
    setFifthDayMinTemp(Math.floor(Math.min(...fifthDayMinTempArray)));
    setFifthDayIcon(FindMostRepeated(fifthDayIconArray));
    setFifthDayWind(Math.max(...fifthDayWindArray));
    setFifthDayHumidity(Math.max(...fifthDayHumidityArray));
    setFifthDayDescription(DescriptionFormat(FindMostRepeated(fifthDayDescriptionArray)));
  }

  const setSearch = async (city: string, key: string) => {
    let data: ICurrentDayData = await SearchCurrentApiCall(city, key);
    let FiveDayData: IFiveDayData = await SearchFiveDayApiCall(city,key);

    // ALL OF CURRENT DAY DATA
    let maxTemp: number = Math.floor(data.main.temp_max);
    let temp: number = Math.floor(data.main.temp);
    let minTemp: number = Math.floor(data.main.temp_min);
    let description: string = data.weather[0].description;
    let wind: number = data.wind.speed;
    let humidity: number = Math.floor(data.main.humidity);
    let name: string = data.name + ", " + data.sys.country;
    setCurrentTemp(temp);
    setFarenheitTemp(temp);
    setCurrentMaxTemp(maxTemp);
    setFarenheitMaxTemp(maxTemp);
    setCurrentMinTemp(minTemp);
    setFarenheitMinTemp(minTemp);
    setCurrentDescription(DescriptionFormat(description));
    setCurrentWind(wind);
    setCurrentHumidity(humidity);
    setCurrentName(name);

    let firstDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[0]);
    let firstDayMaxTempArray = firstDayData.map(data => data.main.temp_max);
    let firstDayMinTempArray = firstDayData.map(data => data.main.temp_min);
    let firstDayWindArray = firstDayData.map(data => data.wind.speed);
    let firstDayHumidityArray = firstDayData.map(data => data.main.humidity);
    let firstDayDescriptionArray = firstDayData.map(data => data.weather[0].description);
    let firstDayIconArray = firstDayData.map(data => data.weather[0].icon);

    setFirstDayName(GetWeekDays()[0]);
    setFirstDayMaxTemp(Math.floor(Math.max(...firstDayMaxTempArray)));
    setFirstDayMinTemp(Math.floor(Math.min(...firstDayMinTempArray)));
    setFirstDayIcon(FindMostRepeated(firstDayIconArray));
    setFirstDayWind(Math.max(...firstDayWindArray));
    setFirstDayHumidity(Math.max(...firstDayHumidityArray));
    setFirstDayDescription(DescriptionFormat(FindMostRepeated(firstDayDescriptionArray)));

    let secondDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[1]);
    let secondDayMaxTempArray = secondDayData.map(data => data.main.temp_max);
    let secondDayMinTempArray = secondDayData.map(data => data.main.temp_min);
    let secondDayWindArray = secondDayData.map(data => data.wind.speed);
    let secondDayHumidityArray = secondDayData.map(data => data.main.humidity);
    let secondDayDescriptionArray = secondDayData.map(data => data.weather[0].description);
    let secondDayIconArray = secondDayData.map(data => data.weather[0].icon);

    setSecondDayName(GetWeekDays()[1]);
    setSecondDayMaxTemp(Math.floor(Math.max(...secondDayMaxTempArray)));
    setSecondDayMinTemp(Math.floor(Math.min(...secondDayMinTempArray)));
    setSecondDayIcon(FindMostRepeated(secondDayIconArray));
    setSecondDayWind(Math.max(...secondDayWindArray));
    setSecondDayHumidity(Math.max(...secondDayHumidityArray));
    setSecondDayDescription(DescriptionFormat(FindMostRepeated(secondDayDescriptionArray)));


    let thirdDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[2]);
    let thirdDayMaxTempArray = thirdDayData.map(data => data.main.temp_max);
    let thirdDayMinTempArray = thirdDayData.map(data => data.main.temp_min);
    let thirdDayWindArray = thirdDayData.map(data => data.wind.speed);
    let thirdDayHumidityArray = thirdDayData.map(data => data.main.humidity);
    let thirdDayDescriptionArray = thirdDayData.map(data => data.weather[0].description);
    let thirdDayIconArray = thirdDayData.map(data => data.weather[0].icon);

    setThirdDayName(GetWeekDays()[2]);
    setThirdDayMaxTemp(Math.floor(Math.max(...thirdDayMaxTempArray)));
    setThirdDayMinTemp(Math.floor(Math.min(...thirdDayMinTempArray)));
    setThirdDayIcon(FindMostRepeated(thirdDayIconArray));
    setThirdDayWind(Math.max(...thirdDayWindArray));
    setThirdDayHumidity(Math.max(...thirdDayHumidityArray));
    setThirdDayDescription(DescriptionFormat(FindMostRepeated(thirdDayDescriptionArray)));


    let fourthDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[3]);
    let fourthDayMaxTempArray = fourthDayData.map(data => data.main.temp_max);
    let fourthDayMinTempArray = fourthDayData.map(data => data.main.temp_min);
    let fourthDayWindArray = fourthDayData.map(data => data.wind.speed);
    let fourthDayHumidityArray = fourthDayData.map(data => data.main.humidity);
    let fourthDayDescriptionArray = fourthDayData.map(data => data.weather[0].description);
    let fourthDayIconArray = fourthDayData.map(data => data.weather[0].icon);

    setFourthDayName(GetWeekDays()[3]);
    setFourthDayMaxTemp(Math.floor(Math.max(...fourthDayMaxTempArray)));
    setFourthDayMinTemp(Math.floor(Math.min(...fourthDayMinTempArray)));
    setFourthDayIcon(FindMostRepeated(fourthDayIconArray));
    setFourthDayWind(Math.max(...fourthDayWindArray));
    setFourthDayHumidity(Math.max(...fourthDayHumidityArray));
    setFourthDayDescription(DescriptionFormat(FindMostRepeated(fourthDayDescriptionArray)));

    let fifthDayData = FiveDayData.list.filter(data => GetDayOfWeek(data.dt_txt) === GetWeekDays()[4]);
    let fifthDayMaxTempArray = fifthDayData.map(data => data.main.temp_max);
    let fifthDayMinTempArray = fifthDayData.map(data => data.main.temp_min);
    let fifthDayWindArray = fifthDayData.map(data => data.wind.speed);
    let fifthDayHumidityArray = fifthDayData.map(data => data.main.humidity);
    let fifthDayDescriptionArray = fifthDayData.map(data => data.weather[0].description);
    let fifthDayIconArray = fifthDayData.map(data => data.weather[0].icon);

    setFifthDayName(GetWeekDays()[4]);
    setFifthDayMaxTemp(Math.floor(Math.max(...fifthDayMaxTempArray)));
    setFifthDayMinTemp(Math.floor(Math.min(...fifthDayMinTempArray)));
    setFifthDayIcon(FindMostRepeated(fifthDayIconArray));
    setFifthDayWind(Math.max(...fifthDayWindArray));
    setFifthDayHumidity(Math.max(...fifthDayHumidityArray));
    setFifthDayDescription(DescriptionFormat(FindMostRepeated(fifthDayDescriptionArray)));
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    async function success(pos: {
      coords: { latitude: any; longitude: any };
    }) {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      setInit(lat, long, key);
    }

    function error(error: { message: string }) {
      // setCurrentWeatherData(await CurrentApiCall());
      console.log(error.message);
    }

    console.log(DescriptionFormat("hi my name is jayvon"))
  }, [])

  return (
    <div className="min-h-screen weatherBg px-16 py-8">
      <div className="boxBg h-full w-full py-10 px-14 rounded-2xl">

        {/* First row of the page */}
        <div className="grid xl:grid-cols-[52%_6%_42%] mb-8">

          <div className="relative">

            <input className="min-h-12 w-full rounded-[25px]" onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="Search for a city" value={userInput}/>
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
            <div className="p-8 boxTwoBg w-full rounded-3xl mb-20 relative">

              <img className="absolute -left-12 -top-7 w-40" src={sun.src} alt="" />

              <h1 className="josefin text-center text-white text-6xl font-bold mb-8">Current Weather</h1>

              <div className="flex justify-center mb-8 gap-4">
                <h3 className="text-white josefin text-4xl">{currentName!}</h3>
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
                      <p className="josefin text-white text-3xl">{currentMaxTemp + "°" + degreeSymbol}</p>
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
                      <p className="josefin text-white text-3xl">{currentWind + 'm/s'}</p>
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
                      <p className="josefin text-white text-3xl">{currentMinTemp + "°" + degreeSymbol}</p>
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
                      <p className="josefin text-white text-3xl">{currentHumidity + '%'}</p>
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
          <div className="py-6 px-8 boxTwoBg w-full rounded-3xl h-[785px] overflow-y-scroll">

            <div className="flex items-center">
              <img className="min-h-[90px] pb-2" src={calender.src} alt="" />
              <h1 className="josefin text-white text-[66px] font-bold text-center w-full">5 Day Forecast</h1>
            </div>

            <hr className="my-7" />


            {/* THE ACCORDION */}
            <WeekDayComponent bool={dayOne} handleDay={handleDayOne} weatherIcon={sun.src} dayName={firstDayName} maxTemp={firstDayMaxTemp} minTemp={firstDayMinTemp} wind={firstDayWind} humidity={firstDayHumidity} description={firstDayDescription}/>

            <hr className="my-7" />

            <WeekDayComponent bool={dayTwo} handleDay={handleDayTwo} weatherIcon={sun.src} dayName={secondDayName} maxTemp={secondDayMaxTemp} minTemp={secondDayMinTemp} wind={secondDayWind} humidity={secondDayHumidity} description={secondDayDescription}/>

            <hr className="my-7" />

            <WeekDayComponent bool={dayThree} handleDay={handleDayThree} weatherIcon={sun.src} dayName={thirdDayName} maxTemp={thirdDayMaxTemp} minTemp={thirdDayMinTemp} wind={thirdDayWind} humidity={thirdDayHumidity} description={thirdDayDescription}/>

            <hr className="my-7" />

            <WeekDayComponent bool={dayFour} handleDay={handleDayFour} weatherIcon={sun.src} dayName={fourthDayName} maxTemp={fourthDayMaxTemp} minTemp={fourthDayMinTemp} wind={fourthDayWind} humidity={fourthDayHumidity} description={fourthDayDescription}/>

            <hr className="my-7" />

            <WeekDayComponent bool={dayFive} handleDay={handleDayFive} weatherIcon={sun.src} dayName={fifthDayName} maxTemp={fifthDayMaxTemp} minTemp={fifthDayMinTemp} wind={fifthDayWind} humidity={fifthDayHumidity} description={fifthDayDescription}/>

          </div>
        </div>
      </div>
    </ div >
  );
}
