// Will only convert to Celsius since the original data is Fahrenheit.
export const converTemperature = (temp, unit = "f") => {
  switch (unit.toLowerCase()) {
    case "c":
      return Math.round((temp - 32) * (5 / 9));
    default:
      return Math.round(temp);
  }
};
// Capitalize the first letter of each word.
export const titleCase = str => {
  return str
    .split(" ")
    .map(function(word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};
// Get the complete day name from date.
export const getFullDay = date => {
  const day = date.toString().split(" ")[0];
  switch (day) {
    case "Tue":
      return "Tuesday";
    case "Wed":
      return "Wednesday";
    case "Thu":
      return "Thursday";
    case "Sat":
      return "Saturday";
    default:
      return day + "day";
  }
};

export const getIcon = icon => {
  let iconName = "";
  switch (icon) {
    case "01d":
      iconName = "wi wi-day-sunny";
      break;
    case "02d":
      iconName = "wi wi-day-sunny-overcast";
      break;
    case "01n":
      iconName = "wi wi-night-clear";
      break;
    case "02n":
      iconName = "wi wi-night-partly-cloudy";
      break;
    case "03d":
      iconName = "wi wi-cloud";
      break;
    case "03n":
      iconName = "wi wi-night-alt-cloudy";
      break;
    case "04d":
      iconName = "wi wi-cloudy";
      break;
    case "04n":
      iconName = "wi wi-night-cloudy";
      break;
    case "09d":
      iconName = "wi wi-showers";
      break;
    case "09n":
      iconName = "wi wi-night-showers";
      break;
    case "10d":
      iconName = "wi wi-rain";
      break;
    case "10n":
      iconName = "wi wi-night-rain";
      break;
    case "11d":
      iconName = "wi wi-thunderstorm";
      break;
    case "11n":
      iconName = "wi wi-night-thunderstorm";
      break;
    case "13d":
      iconName = "wi wi-snow";
      break;
    case "13n":
      iconName = "wi wi-night-snow";
      break;
    case "50d":
      iconName = "wi wi-fog";
      break;
    case "50n":
      iconName = "wi wi-night-fog";
      break;
    default:
      iconName = "wi wi-day-sunny";
  }

  return iconName;
};

export default { converTemperature, titleCase, getFullDay, getIcon };
