import { CurrentWeatherModel } from "@/apiModels/CurrentWeatherModel";
import CityChoice from "@/components/CityChoice";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CurrentWeatherDetailBlock from "./CurrentWeatherDetailBlock";

interface CurrentWeatherProps {
  weatherData: CurrentWeatherModel;
 
}



const CurrentWeather = ({ weatherData }: CurrentWeatherProps) => {
  const location: string[] = ["Spring", "Magnolia", "Texarkana"];
  const [city, setCity] = useState("Home");

  return (
    <SafeAreaView className=" bg-black">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 justify-center items-center">
          {/* display the logo */}
          <Text className="text-white bg-purple-950 shadow-xl border border-indigo-300 shadow-indigo-500 text-4xl mt-10 py-2 px-6 rounded-3xl">
            Pops Weather
          </Text>

          {/* display city lookup */}
          <View className="my-10 bg-white/15 p-5 w-full">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {location.map((choice, index) => (
                <CityChoice
                  key={index}
                  choice={choice}
                  city={city}
                  setCity={setCity}
                />
              ))}
            </ScrollView>
          </View>

          {/* display city name */}
          <Text className="text-4xl text-slate-100 mb-10">{"City"}</Text>

          {/* display the temperature */}
          <Text className="text-8xl text-slate-100 mb-10">
            {weatherData.temp}
          </Text>

          {/* current conditions view window */}
          <View className="flex-1 bg-white/5 w-[90%]  rounded-2xl items-center p-4 ">
            {/* Current Weather Conditions Heading */}
            <Text className="text-gray-50 text-4xl border-gray-100 border-b w-[95%] text-center pb-2">
              {weatherData.skies}
            </Text>

            <View className="flex-1 items-center justify-start w-[95%] py-2">
              <View className="flex-row gap-2">
                <CurrentWeatherDetailBlock
                  title="Sunrise"
                  data={weatherData.sunrise}
                />
                <CurrentWeatherDetailBlock
                  title="Sunset"
                  data={weatherData.sunset}
                />
              </View>

              <View className="flex-row gap-2">
                <CurrentWeatherDetailBlock
                  title="Feels Like"
                  data={weatherData.feelsLike}
                />
                <CurrentWeatherDetailBlock
                  title="Humidity"
                  data={weatherData.humidity}
                />
              </View>

              <View className="flex-row gap-2">
                <CurrentWeatherDetailBlock
                  title="Pressure"
                  data={weatherData.pressure}
                />
                <CurrentWeatherDetailBlock
                  title="Dew Point"
                  data={weatherData.dewPoint}
                />
              </View>

              <View className="flex-row gap-2">
                <CurrentWeatherDetailBlock
                  title="Visibility"
                  data={weatherData.visibility}
                />
                <CurrentWeatherDetailBlock
                  title="UV Index"
                  data={weatherData.uvIndex}
                />
              </View>

              <View className="flex-row gap-2">
                <CurrentWeatherDetailBlock
                  title={weatherData.windDirection + " Wind"}
                  data={weatherData.windSpeed}
                />
                <CurrentWeatherDetailBlock
                  title="Wind Gusts"
                  data={weatherData.windGust}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurrentWeather;
