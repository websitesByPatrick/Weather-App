interface CurrentWeatherTypes {
  current: {
    temp: number;
    sunrise: number;
    sunset: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    dew_point: number;
    visibility: number;
    uvi: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: [
      {
        main: string;
      },
    ];
  };
}

export class CurrentWeatherModel {
  temp: number | string;
  sunrise: number | string;
  sunset: number | string;
  feelsLike: number | string;
  humidity: number | string;
  pressure: number | string;
  dewPoint: number | string;
  visibility: number | string;
  uvIndex: number;
  windSpeed: number | string;
  windDirection: number | string;
  windGust: number | string;
  skies: string;
  

  constructor(data: CurrentWeatherTypes) {
    this.temp = Math.round(data.current.temp) + "\u00B0";
    this.sunrise = this.formatTime(data.current.sunrise);
    this.sunset = this.formatTime(data.current.sunset);
    this.feelsLike = Math.round(data.current.feels_like) + "\u00B0";
    this.humidity = data.current.humidity + "%";
    this.pressure = (data.current.pressure * 0.02953).toFixed(2) + " inHg";
    this.dewPoint = Math.round(data.current.dew_point) + "\u00B0";
    this.visibility = (data.current.visibility).toFixed(1) + " miles";
    this.uvIndex = data.current.uvi;
    this.windSpeed = Math.round(data.current.wind_speed) + " mph";
    this.windDirection = this.formatWindDirection(data.current.wind_deg);
    this.windGust = data.current.wind_gust
      ? Math.round(data.current.wind_gust) + " mph"
      : "None";
    this.skies = data.current.weather[0].main;

    
  }

  formatTime(time: number) {
    let hour = new Date(time * 1000).getHours();
    const minute = new Date(time * 1000).getMinutes();
    let AMPM = "AM";

    if (hour > 12) {
      hour = hour - 12;
      AMPM = "PM";
    }
    return hour + ":" + minute + " " + AMPM;
  }

  formatWindDirection(degree: number) {
    const val = Math.floor(degree / 22.5 + 0.5);
    let arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  }
}
