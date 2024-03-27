const getPastSearches = () => {
    let storage = localStorage.getItem("WeatherAppPastSearches");

    if(storage === null){
        return [];
    }
    
    return JSON.parse(storage);
}

const saveToPastSearches = (search: string) => {
    let past: string[] = getPastSearches();
    if(!past.includes(search.toLowerCase())){
        past.push(search.toLowerCase());
    }
    localStorage.setItem("WeatherAppPastSearches", JSON.stringify(past))
}

const removeFromPastSearches = (search: string) => {
    let past: string[] = getPastSearches();

    let index = past.indexOf(search);

    past.splice(index, 1);

    localStorage.setItem("WeatherAppPastSearches", JSON.stringify(past))
}