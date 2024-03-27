
export const GrabIcon = (iconID: string) => {
  switch (iconID) {
    case "01d" || "01n":
      return 0;
      break;
    case "21d" || "02n":
      return 1;
      break;
    case "03d" || "03n":
      return 2;
      break;
    case "04d" || "04n":
      return 2;
      break;
    case "09d" || "09n":
      return 3;
      break;
    case "10d" || "10n":
      return 3;
      break;
    case "11d" || "11n":
      return 4;
      break;
    case "131d" || "13n":
      return 5;
      break;
    case "50d" || "50n":
      return 6;
      break;
    default:
      return 0;
      break;
  }
};
