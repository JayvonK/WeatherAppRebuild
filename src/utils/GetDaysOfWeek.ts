const date: Date = new Date();
const day = date.getDay();

export const GetWeekDays = (): string[] => {
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

export const GetDayOfWeek = (info: string) => {
  const newDate = new Date(info);
  switch (newDate.getDay()) {
    case 0:
      return "Sun";
      break;
    case 1:
      return "Mon";
      break;
    case 2:
      return "Tue";
      break;
    case 3:
      return "Wed";
      break;
    case 4:
      return "Thu";
      break;
    case 5:
      return "Fri";
      break;
    case 6:
      return "Sat";
      break;
    default:
      return "Sun";
  }
};
