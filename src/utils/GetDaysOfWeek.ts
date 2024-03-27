const date: Date = new Date();
const day = date.getDay();

export const GetDayOfWeek = (): string[] => {
  switch (day) {
    case 0:
      return ["Mon", "Tue", "Wed", "Thu", "Fri"];
      break;
    case 1:
      return ["Tue", "Wed", "Thu", "Fri", "Sat"];
      break;
    case 2:
      return ["Wed", "Thu", "Fri", "Sat", "Sun"];
      break;
    case 3:
      return ["Thu", "Fri", "Sat", "Sun", "Mon"];
      break;
    case 4:
      return ["Fri", "Sat", "Sun", "Mon", "Tue"];
      break;
    case 5:
      return ["Sat", "Sun", "Mon", "Tue", "Wed"];
      break;
    case 6:
      return ["Sun", "Mon", "Tue", "Wed", "Thu"];
      break;
    default:
      return ["Mon", "Tue", "Wed", "Thu", "Fri"];
  }
};
