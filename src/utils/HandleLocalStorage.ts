export const getPastSearches = () => {
  let storage = localStorage.getItem("WeatherAppPastSearches");

  if (storage === null) {
    return [];
  }

  return JSON.parse(storage);
};

export const saveToPastSearches = (search: [string, boolean]) => {
  let past: [string, boolean][] = getPastSearches();
  let same: boolean = false;
  for(let i = 0; i < past.length; i++) {
    if(past[i][0] === search[0]){
        past.splice(i, 1);
        past.unshift(search);
        same = true;
    }
  }
  if(!same){
    past.push(search);
  }

  localStorage.setItem("WeatherAppPastSearches", JSON.stringify(past));
};

export const removeFromPastSearches = (search: [string, boolean]) => {
  let past: [string, boolean][] = getPastSearches();
  for (let i = 0; i < past.length; i++) {
    if (search[0] === past[i][0]) {
      past.splice(i, 1)
    }
  }
  localStorage.setItem("WeatherAppPastSearches", JSON.stringify(past));
};

export const checkPastSearch = (search: [string, boolean]) => {
    let past: [string, boolean][] = getPastSearches();
    for(let i = 0; i < past.length; i++){
        if(past[i][0] === search[0] && past[i][1] !== search[1]){
            past[i][1] = search[1]
        }
    }
    localStorage.setItem("WeatherAppPastSearches", JSON.stringify(past));
}

export const getFavorites = () => {
  let storage = localStorage.getItem("WeatherAppPastFavorites");

  if (storage === null) {
    return [];
  }

  return JSON.parse(storage);
};

export const saveToFavorites = (name: string) => {
  let past: string[] = getFavorites();
  if (!past.includes(name.toLowerCase())) {
    past.push(name.toLowerCase());
  }
  localStorage.setItem("WeatherAppPastFavorites", JSON.stringify(past));
};

export const removeFromFavorites = (name: string) => {
  let past: string[] = getFavorites();

  let index = past.indexOf(name);

  past.splice(index, 1);

  localStorage.setItem("WeatherAppPastFavorites", JSON.stringify(past));
};
