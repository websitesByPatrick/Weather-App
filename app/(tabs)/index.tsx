import { CurrentWeatherModel } from "@/apiModels/CurrentWeatherModel";
import CurrentWeather from "@/components/CurrentWeather";
import axios from "axios";
import { useEffect, useState } from "react";
const Index = () => {
  const [CurrentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/3.0/onecall?lat=30.0799&lon=-95.4172&appid=&units=imperial"
        );
        setCurrentWeatherData(new CurrentWeatherModel(response.data));
      } catch (err: any) {
        console.log(err.message + " Error");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading || !CurrentWeatherData) {
    return null;
  }

  return <CurrentWeather weatherData={CurrentWeatherData} />;
};
export default Index;
