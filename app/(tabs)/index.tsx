import CurrentWeather from "@/components/CurrentWeather";
import useLoadWeatherAPI from "@/hooks/weatherAPICall";

const Index = () => {
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
  const cities = [
    { city: "Spring", lat: "30.0799", lon: "-95.4172" },
    { city: "Magnolia", lat: "30.2094", lon: "-95.7508" },
    { city: "Tomball", lat: "30.0972", lon: "-95.6161" },
    { city: "Texarkana", lat: "33.4305", lon: "-94.0362" },
  ];

  const lon = cities[3].lon;
  const lat = cities[3].lat;

  // Load current weather data
  const { currentWeatherData, loading } = useLoadWeatherAPI({
    lon,
    lat,
    API_KEY,
  });

  // Confirm data is loaded before rendering
  if (loading || !currentWeatherData) {
    console.log("Loading or no data");
    return null;
  } else {
    console.log("Data loaded");
  }

  return <CurrentWeather weatherData={currentWeatherData} />;
};
export default Index;
