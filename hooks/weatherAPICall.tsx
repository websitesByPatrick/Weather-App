import { CurrentWeatherModel } from "@/apiModels/CurrentWeatherModel";
import axios from "axios";
import { useEffect, useState } from "react";

interface loadAPIProps {
  lon: string;
  lat: string;
  API_KEY: string | undefined;
}

const useLoadWeatherAPI = ( {lon, lat, API_KEY} : loadAPIProps) => {
 
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherModel | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
        );
        setCurrentWeatherData(new CurrentWeatherModel(response.data));
      } catch (err: any) {
        console.log(err.message + " Error");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers()
  }, [lon, lat, API_KEY])

  return { currentWeatherData, loading};
};
export default useLoadWeatherAPI

    