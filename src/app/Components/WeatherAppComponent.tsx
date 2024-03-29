'use client'

import React from 'react';
import star from '../../../public/images/star-fill.svg';
import thermometer from '../../../public/images/thermometer-fill.svg';
import calender from '../../../public/images/calendar-blank-fill.svg';
import sun from "../../../public/images/sun-fill.svg";
import fewClouds from "../../../public/images/Few Clouds.svg";
import scatteredClouds from "../../../public/images/scattered cloutds.svg";
import rain from "../../../public/images/rain.svg";
import thunder from "../../../public/images/thunder.svg";
import snow from "../../../public/images/snow.svg";
import mist from "../../../public/images/mist.svg";
import magnifyingGlass from "../../../public/images/magnifying-glass.svg"
import x from "../../../public/images/x (2).svg";
import backArrow from "../../../public/images/arrow-counter-clockwise.svg";
import starOutline from "../../../public/images/star-outline.svg"
import { useEffect, useState } from "react";
import WeekDayComponent from "../Components/WeekDayComponent";
import { CurrentApiCall, FiveDayApiCall, SearchCurrentApiCall, SearchFiveDayApiCall } from "@/Data/DataServices";
import { ICurrentDayData, IFiveDayData } from "@/Interfaces/Interfaces";
import { key } from "@/utils/environment";
import WeatherDataCopy from '@/utils/WeatherCopy.json';
import FiveDayDataCopy from '@/utils/FiveDayWeatherCopy.json'
import { ConvertToCelsius, ConvertToFarenheit } from "@/utils/TempConverter";
import { GetDayOfWeek, GetWeekDays } from "@/utils/GetDaysOfWeek";
import { CityNameFormat, DescriptionFormat } from "@/utils/DescriptionFormat";
import { FindMostRepeated } from "@/utils/FindMostRepeated";
import { GrabIcon } from "@/utils/GrabIcon";
import { checkPastSearch, getFavorites, getPastSearches, removeFromFavorites, removeFromPastSearches, saveToFavorites, saveToPastSearches } from "@/utils/HandleLocalStorage";
import SearchBarComponent from "../Components/SearchBarComponent";
import CityBoxComponent from "../Components/CityBoxComponent";
import MainInfoComponent from "../Components/MainInfoComponent";

const WeatherAppComponent = () => {


  const [dayOne, setDayOne] = useState<boolean>(false);
  const [dayTwo, setDayTwo] = useState<boolean>(false);
  const [dayThree, setDayThree] = useState<boolean>(false);
  const [dayFour, setDayFour] = useState<boolean>(false);
  const [dayFive, setDayFive] = useState<boolean>(false);

  const [currentName, setCurrentName] = useState<string>('')
  const [currentCountry, setCurrentCountry] = useState<string>('');
  const [currentWind, setCurrentWind] = useState<number>(0);
  const [currentHumidity, setCurrentHumidity] = useState<number>(0);
  const [currentDayIcon, setCurrentDayIcon] = useState<any>(sun);
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
  const [farenheitClass, setFarenheitClass] = useState<string>('sm:text-6xl text-white text-4xl')
  const [celciusClass, setCelciusClass] = useState<string>('sm:text-5xl tempGray text-3xl');
  const [farenheitClass2, setFarenheitClass2] = useState<string>('2xl:text-[40px] xl:text-3xl md:text-[40px] sm:text-3xl text-2xl text-white')
  const [celciusClass2, setCelciusClass2] = useState<string>('2xl:text-3xl xl:text-2xl md:text-3xl sm:text-2xl text-xl tempGray');
  const [degreeSymbol, setDegreeSymbol] = useState<string>('F');
  const [currentWeatherData, setCurrentWeatherData] = useState<ICurrentDayData>(WeatherDataCopy);
  // const [currentLong, setCurrentLong] = useState('-121.275604');
  // const [currentLat, setCurrentLat] = useState('37.961632');

  const [fiveDayData, setFiveDayData] = useState<IFiveDayData>(FiveDayDataCopy);
  // All First Day State Variables
  const [firstDayName, setFirstDayName] = useState<string>('');
  const [firstDayMaxTemp, setFirstDayMaxTemp] = useState<number>(0);
  const [firstDayMinTemp, setFirstDayMinTemp] = useState<number>(0);
  const [staticFirstDayMaxTemp, setStaticFirstDayMaxTemp] = useState<number>(0);
  const [staticFirstDayMinTemp, setStaticFirstDayMinTemp] = useState<number>(0);
  const [firstDayTemp, setFirstDayTemp] = useState<number>(0);
  const [firstDayIcon, setFirstDayIcon] = useState<any>(sun);
  const [firstDayWind, setFirstDayWind] = useState<number>(0);
  const [firstDayHumidity, setFirstDayHumidity] = useState<number>(0);
  const [firstDayDescription, setFirstDayDescription] = useState<string>('');

  const [secondDayName, setSecondDayName] = useState<string>('');
  const [secondDayMaxTemp, setSecondDayMaxTemp] = useState<number>(0);
  const [secondDayMinTemp, setSecondDayMinTemp] = useState<number>(0);
  const [staticSecondDayMaxTemp, setStaticSecondDayMaxTemp] = useState<number>(0);
  const [staticSecondDayMinTemp, setStaticSecondDayMinTemp] = useState<number>(0);
  const [secondDayTemp, setSecondDayTemp] = useState<number>(0);
  const [secondDayIcon, setSecondDayIcon] = useState<any>(sun);
  const [secondDayWind, setSecondDayWind] = useState<number>(0);
  const [secondDayHumidity, setSecondDayHumidity] = useState<number>(0);
  const [secondDayDescription, setSecondDayDescription] = useState<string>('');

  const [thirdDayName, setThirdDayName] = useState<string>('');
  const [thirdDayMaxTemp, setThirdDayMaxTemp] = useState<number>(0);
  const [thirdDayMinTemp, setThirdDayMinTemp] = useState<number>(0);
  const [staticThirdDayMaxTemp, setStaticThirdDayMaxTemp] = useState<number>(0);
  const [staticThirdDayMinTemp, setStaticThirdDayMinTemp] = useState<number>(0);
  const [thirdDayTemp, setThirdDayTemp] = useState<number>(0);
  const [thirdDayIcon, setThirdDayIcon] = useState<any>(sun);
  const [thirdDayWind, setThirdDayWind] = useState<number>(0);
  const [thirdDayHumidity, setThirdDayHumidity] = useState<number>(0);
  const [thirdDayDescription, setThirdDayDescription] = useState<string>('');

  const [fourthDayName, setFourthDayName] = useState<string>('');
  const [fourthDayMaxTemp, setFourthDayMaxTemp] = useState<number>(0);
  const [fourthDayMinTemp, setFourthDayMinTemp] = useState<number>(0);
  const [staticFourthDayMaxTemp, setStaticFourthDayMaxTemp] = useState<number>(0);
  const [staticFourthDayMinTemp, setStaticFourthDayMinTemp] = useState<number>(0);
  const [fourthDayTemp, setFourthDayTemp] = useState<number>(0);
  const [fourthDayIcon, setFourthDayIcon] = useState<any>(sun);
  const [fourthDayWind, setFourthDayWind] = useState<number>(0);
  const [fourthDayHumidity, setFourthDayHumidity] = useState<number>(0);
  const [fourthDayDescription, setFourthDayDescription] = useState<string>('');

  const [fifthDayName, setFifthDayName] = useState<string>('');
  const [fifthDayMaxTemp, setFifthDayMaxTemp] = useState<number>(0);
  const [fifthDayMinTemp, setFifthDayMinTemp] = useState<number>(0);
  const [staticFifthDayMaxTemp, setStaticFifthDayMaxTemp] = useState<number>(0);
  const [staticFifthDayMinTemp, setStaticFifthDayMinTemp] = useState<number>(0);
  const [fifthDayTemp, setFifthDayTemp] = useState<number>(0);
  const [fifthDayIcon, setFifthDayIcon] = useState<any>(sun);
  const [fifthDayWind, setFifthDayWind] = useState<number>(0);
  const [fifthDayHumidity, setFifthDayHumidity] = useState<number>(0);
  const [fifthDayDescription, setFifthDayDescription] = useState<string>('');

  let iconArray: any[] = [sun, fewClouds, scatteredClouds, rain, thunder, snow, mist]
  const [pastSearch, setPastSearch] = useState<boolean>(false);
  const [pastSearchArray, setPastSearchArray] = useState<string[]>([]);
  const [favoritesArray, setFavoritesArray] = useState<string[]>([]);
  const [isFav, setIsFav] = useState<boolean>(false);
  const [favActive, setFavActive] = useState<boolean>(false);



  const handleFarenheit = () => {
    setFarenheitBool(true);
    setFarenheitClass('sm:text-6xl text-white text-4xl');
    setCelciusClass('sm:text-5xl tempGray text-3xl');
    setFarenheitClass2('2xl:text-[40px] xl:text-3xl md:text-[40px] sm:text-3xl text-2xl text-white');
    setCelciusClass2('2xl:text-3xl xl:text-2xl md:text-3xl sm:text-2xl text-xl tempGray');
    setDegreeSymbol('F');
    setCurrentTemp(farenheitTemp);
    setCurrentMaxTemp(farenheitMaxTemp);
    setCurrentMinTemp(farenheitMinTemp);

    setFirstDayMaxTemp(staticFirstDayMaxTemp);
    setFirstDayMinTemp(staticFirstDayMinTemp);
    setSecondDayMaxTemp(staticSecondDayMaxTemp);
    setSecondDayMinTemp(staticSecondDayMinTemp);
    setThirdDayMaxTemp(staticThirdDayMaxTemp);
    setThirdDayMinTemp(staticThirdDayMinTemp);
    setFourthDayMaxTemp(staticFourthDayMaxTemp);
    setFourthDayMinTemp(staticFourthDayMinTemp);
    setFifthDayMaxTemp(staticFifthDayMaxTemp);
    setFifthDayMinTemp(staticFifthDayMinTemp);
  }

  const handleCelcius = () => {
    setFarenheitBool(false);
    setCelciusClass('sm:text-6xl text-white text-4xl');
    setFarenheitClass('sm:text-5xl tempGray text-3xl');
    setFarenheitClass2('2xl:text-3xl xl:text-2xl md:text-3xl sm:text-2xl text-xl tempGray');
    setCelciusClass2('2xl:text-[40px] xl:text-3xl md:text-[40px] sm:text-3xl text-2xl text-white');
    setDegreeSymbol('C');
    console.log(currentWeatherData);
    setCurrentTemp(ConvertToCelsius(currentTemp));
    setCurrentMaxTemp(ConvertToCelsius(currentMaxTemp));
    setCurrentMinTemp(ConvertToCelsius(currentMinTemp));

    setFirstDayMaxTemp(ConvertToCelsius(firstDayMaxTemp));
    setFirstDayMinTemp(ConvertToCelsius(firstDayMinTemp));
    setSecondDayMaxTemp(ConvertToCelsius(secondDayMaxTemp));
    setSecondDayMinTemp(ConvertToCelsius(secondDayMinTemp));
    setThirdDayMaxTemp(ConvertToCelsius(thirdDayMaxTemp));
    setThirdDayMinTemp(ConvertToCelsius(thirdDayMinTemp));
    setFourthDayMaxTemp(ConvertToCelsius(fourthDayMaxTemp));
    setFourthDayMinTemp(ConvertToCelsius(fourthDayMinTemp));
    setFifthDayMaxTemp(ConvertToCelsius(fifthDayMaxTemp));
    setFifthDayMinTemp(ConvertToCelsius(fifthDayMinTemp));
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
    if (e.key === "Enter") {
      searchForWeather(userInput, key)
      setUserInput("");
      setPastSearch(false);
    }
  }

  const handleSearchButton = () => {
    searchForWeather(userInput, key)
    setUserInput("");
    setPastSearch(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }

  const handlePastSearchTrue = () => {
    savePastSearchArray();
    setPastSearch(true);
    setFavActive(false);
  }

  const handlePastSearchFalse = () => {
    setPastSearch(false);
  }

  const handleFavActive = () => {
    handlePastSearchFalse();
    setFavActive(!favActive);
  }

  const handlePastSearchClick = (city: string) => {
    setPastSearch(false);
    setFavActive(false);
    setUserInput("");
    searchForWeather(city, key);
  }

  const handleFavoriteClick = () => {
    if (isFav) {
      setIsFav(!isFav);
      removeFromFavorites(currentName);
      let SearchVariable: [string, boolean] = [currentName, isFav];
      grabLocalStorage(currentName);
    } else {
      setIsFav(!isFav);
      saveToFavorites(currentName);
      let SearchVariable: [string, boolean] = [currentName, isFav];
      grabLocalStorage(currentName);
    }
  }

  const handleRemoveFav = (name: string) => {
    removeFromFavorites(name);
    grabLocalStorage(currentName.toLowerCase());
  }

  const handleSavePastSearchFav = (name: string) => {
    saveToFavorites(name.toLowerCase());
    grabLocalStorage(currentName.toLowerCase());
  }

  const handleRemovePastSearchFav = (name: string) => {
    removeFromFavorites(name.toLowerCase());
    grabLocalStorage(currentName.toLowerCase());
  }

  const grabLocalStorage = (name: string) => {
    saveFavoriteArray();
    savePastSearchArray();
    if (getFavorites().includes(name.toLowerCase())) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }

  const savePastSearchArray = () => {
    checkPastSearch();
    setPastSearchArray(getPastSearches());
  }

  const saveFavoriteArray = () => {
    setFavoritesArray(getFavorites());
  }

  const initWeatherCall = async (lat: any, long: any, key: string) => {
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
    let icon: string = data.weather[0].icon;
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
    setCurrentDayIcon(iconArray[GrabIcon(icon)])

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
    setStaticFirstDayMaxTemp(Math.floor(Math.max(...firstDayMaxTempArray)));
    setStaticFirstDayMinTemp(Math.floor(Math.min(...firstDayMinTempArray)));
    setFirstDayIcon(iconArray[GrabIcon(FindMostRepeated(firstDayIconArray))]);
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
    setStaticSecondDayMaxTemp(Math.floor(Math.max(...secondDayMaxTempArray)));
    setStaticSecondDayMinTemp(Math.floor(Math.min(...secondDayMinTempArray)));
    setSecondDayIcon(iconArray[GrabIcon(FindMostRepeated(secondDayIconArray))]);
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
    setStaticThirdDayMaxTemp(Math.floor(Math.max(...thirdDayMaxTempArray)));
    setStaticThirdDayMinTemp(Math.floor(Math.min(...thirdDayMinTempArray)));
    setThirdDayIcon(iconArray[GrabIcon(FindMostRepeated(thirdDayIconArray))]);
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
    setStaticFourthDayMaxTemp(Math.floor(Math.max(...fourthDayMaxTempArray)));
    setStaticFourthDayMinTemp(Math.floor(Math.min(...fourthDayMinTempArray)));
    setFourthDayIcon(iconArray[GrabIcon(FindMostRepeated(fourthDayIconArray))]);
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
    setStaticFifthDayMaxTemp(Math.floor(Math.max(...fifthDayMaxTempArray)));
    setFifthDayMinTemp(Math.floor(Math.min(...fifthDayMinTempArray)));
    setStaticFifthDayMinTemp(Math.floor(Math.min(...fifthDayMinTempArray)));
    setFifthDayIcon(iconArray[GrabIcon(FindMostRepeated(fifthDayIconArray))]);
    setFifthDayWind(Math.max(...fifthDayWindArray));
    setFifthDayHumidity(Math.max(...fifthDayHumidityArray));
    setFifthDayDescription(DescriptionFormat(FindMostRepeated(fifthDayDescriptionArray)));

    grabLocalStorage(name.toLowerCase())
  }

  const searchForWeather = async (city: string, key: string) => {
    try {
      let data: ICurrentDayData = await SearchCurrentApiCall(city, key);
      let FiveDayData: IFiveDayData = await SearchFiveDayApiCall(city, key);

      // ALL OF CURRENT DAY DATA
      let maxTemp: number = Math.floor(data.main.temp_max);
      let temp: number = Math.floor(data.main.temp);
      let minTemp: number = Math.floor(data.main.temp_min);
      let description: string = data.weather[0].description;
      let wind: number = data.wind.speed;
      let humidity: number = Math.floor(data.main.humidity);
      let name: string = data.name + ", " + data.sys.country;
      let icon: string = data.weather[0].icon;
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
      setCurrentDayIcon(iconArray[GrabIcon(icon)])

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
      setStaticFirstDayMaxTemp(Math.floor(Math.max(...firstDayMaxTempArray)));
      setStaticFirstDayMinTemp(Math.floor(Math.min(...firstDayMinTempArray)));
      setFirstDayIcon(iconArray[GrabIcon(FindMostRepeated(firstDayIconArray))]);
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
      setStaticSecondDayMaxTemp(Math.floor(Math.max(...secondDayMaxTempArray)));
      setStaticSecondDayMinTemp(Math.floor(Math.min(...secondDayMinTempArray)));
      setSecondDayIcon(iconArray[GrabIcon(FindMostRepeated(secondDayIconArray))]);
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
      setStaticThirdDayMaxTemp(Math.floor(Math.max(...thirdDayMaxTempArray)));
      setStaticThirdDayMinTemp(Math.floor(Math.min(...thirdDayMinTempArray)));
      setThirdDayIcon(iconArray[GrabIcon(FindMostRepeated(thirdDayIconArray))]);
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
      setStaticFourthDayMaxTemp(Math.floor(Math.max(...fourthDayMaxTempArray)));
      setStaticFourthDayMinTemp(Math.floor(Math.min(...fourthDayMinTempArray)));
      setFourthDayIcon(iconArray[GrabIcon(FindMostRepeated(fourthDayIconArray))]);
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
      setStaticFifthDayMaxTemp(Math.floor(Math.max(...fifthDayMaxTempArray)));
      setFifthDayMinTemp(Math.floor(Math.min(...fifthDayMinTempArray)));
      setStaticFifthDayMinTemp(Math.floor(Math.min(...fifthDayMinTempArray)));
      setFifthDayIcon(iconArray[GrabIcon(FindMostRepeated(fifthDayIconArray))]);
      setFifthDayWind(Math.max(...fifthDayWindArray));
      setFifthDayHumidity(Math.max(...fifthDayHumidityArray));
      setFifthDayDescription(DescriptionFormat(FindMostRepeated(fifthDayDescriptionArray)));

      let theSearch: [string, boolean] = [name.toLowerCase(), isFav];
      saveToPastSearches(theSearch);

      grabLocalStorage(name.toLowerCase());
    } catch (error) {
      removeFromPastSearches([city.toLowerCase(), false]);
      alert("City Does Not Exist");
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    async function success(pos: {
      coords: { latitude: any; longitude: any };
    }) {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      initWeatherCall(lat, long, key);
    }

    function error(error: { message: string }) {
      initWeatherCall(34.0549, 118.2426, key);
      console.log(error.message);
    }

    console.log(DescriptionFormat("hi my name is jayvon"))
  }, [])

  return (
    <div className="min-h-screen weatherBg sm:px-16 sm:py-8 py-6 px-6">
      <div className="boxBg h-full w-full xl:py-10 xl:px-14 px-4 py-4 rounded-2xl darkShadow">

        {/* First row of the page */}
        <SearchBarComponent handleFavActive={handleFavActive} star={star.src} pastSearch={pastSearch} favActive={favActive} magnifyingGlass={magnifyingGlass.src} handleSearchButton={handleSearchButton} handleChange={handleChange} handleKeyDown={handleKeyDown} userInput={userInput} handlePastSearchTrue={handlePastSearchTrue} handlePastSearchFalse={handlePastSearchFalse} pastSearchArray={pastSearchArray} handlePastSearchClick={handlePastSearchClick} backArrow={backArrow.src} handleRemovePastSearchFav={handleRemovePastSearchFav} x={x.src} starOutline={starOutline.src} handleSavePastSearchFav={handleSavePastSearchFav} handleRemoveFav={handleRemoveFav} favoritesArray={favoritesArray} />

        {/* Second Row of the page */}

        {/* The First Column, CURRENT WEATHER*/}
        <div className="grid xl:grid-cols-[50%_6%_44%] ">

          <div>

            {/* The first box */}
            <CityBoxComponent currentDayIcon={currentDayIcon.src} isFav={isFav} currentName={currentName} star={star.src} handleFavoriteClick={handleFavoriteClick} starOutline={starOutline.src} currentTemp={currentTemp} farenheitClass={farenheitClass} handleFarenheit={handleFarenheit} celciusClass={celciusClass} handleCelcius={handleCelcius} currentDescription={currentDescription} />

            {/* Other info max temp, low temp, etc */}

            <MainInfoComponent thermometer={thermometer.src} currentMaxTemp={currentMaxTemp} degreeSymbol={degreeSymbol} currentWind={currentWind} currentMinTemp={currentMinTemp} currentHumidity={currentHumidity} />
            

          </div>

          {/* THE LINE */}
          <div className="xl:flex justify-center hidden">
            <div className="line"></div>
          </div>

          {/* SECOND COLUMN 5 DAY FORECAST */}
          <div className="sm:py-6 sm:px-8 py-4 px-4 boxTwoBg w-full rounded-3xl 2xl:h-[785px] xl:h-[970px] md:h-[785px] h-[720px] overflow-y-scroll scrollbar darkShadow2">

            <div className="flex items-center">
              <img className="sm:min-h-[90px] min-h-[60px] pb-2" src={calender.src} alt="" />
              <h1 className="josefin text-white md:text-[66px] sm:text-5xl text-4xl font-bold text-center w-full sm:leading-tight">5 Day Forecast</h1>
            </div>

            <hr className="2xl:my-7 xl:my-10 my-7" />


            {/* THE ACCORDION */}
            <WeekDayComponent bool={dayOne} handleDay={handleDayOne} weatherIcon={firstDayIcon.src} dayName={firstDayName} maxTemp={firstDayMaxTemp} minTemp={firstDayMinTemp} wind={firstDayWind} humidity={firstDayHumidity} description={firstDayDescription} handleFarenheit={handleFarenheit} handleCelcius={handleCelcius} farenheitClass={farenheitClass2} celciusClass={celciusClass2} />

            <hr className="2xl:my-7 xl:my-10 my-7" />

            <WeekDayComponent bool={dayTwo} handleDay={handleDayTwo} weatherIcon={secondDayIcon.src} dayName={secondDayName} maxTemp={secondDayMaxTemp} minTemp={secondDayMinTemp} wind={secondDayWind} humidity={secondDayHumidity} description={secondDayDescription} handleFarenheit={handleFarenheit} handleCelcius={handleCelcius} farenheitClass={farenheitClass2} celciusClass={celciusClass2} />

            <hr className="2xl:my-7 xl:my-10 my-7" />

            <WeekDayComponent bool={dayThree} handleDay={handleDayThree} weatherIcon={thirdDayIcon.src} dayName={thirdDayName} maxTemp={thirdDayMaxTemp} minTemp={thirdDayMinTemp} wind={thirdDayWind} humidity={thirdDayHumidity} description={thirdDayDescription} handleFarenheit={handleFarenheit} handleCelcius={handleCelcius} farenheitClass={farenheitClass2} celciusClass={celciusClass2} />

            <hr className="2xl:my-7 xl:my-10 my-7" />

            <WeekDayComponent bool={dayFour} handleDay={handleDayFour} weatherIcon={fourthDayIcon.src} dayName={fourthDayName} maxTemp={fourthDayMaxTemp} minTemp={fourthDayMinTemp} wind={fourthDayWind} humidity={fourthDayHumidity} description={fourthDayDescription} handleFarenheit={handleFarenheit} handleCelcius={handleCelcius} farenheitClass={farenheitClass2} celciusClass={celciusClass2} />

            <hr className="2xl:my-7 xl:my-10 my-7" />

            <WeekDayComponent bool={dayFive} handleDay={handleDayFive} weatherIcon={fifthDayIcon.src} dayName={fifthDayName} maxTemp={fifthDayMaxTemp} minTemp={fifthDayMinTemp} wind={fifthDayWind} humidity={fifthDayHumidity} description={fifthDayDescription} handleFarenheit={handleFarenheit} handleCelcius={handleCelcius} farenheitClass={farenheitClass2} celciusClass={celciusClass2} />

          </div>
        </div>
      </div>
    </ div >
  );
}

export default WeatherAppComponent