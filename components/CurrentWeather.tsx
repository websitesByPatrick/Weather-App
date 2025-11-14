import { CurrentWeatherModel } from "@/apiModels/CurrentWeatherModel";
import { LocationContext } from "@/contextProviders/LocationContext";
import { data } from "@/testData";
import React, { useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CurrentWeatherDetailBlock from "./CurrentWeatherDetailBlock";

const CurrentWeather = ({
  weatherData,
}: {
  weatherData: CurrentWeatherModel;
}) => {
  const location = useContext(LocationContext);

  return (
    <SafeAreaView className=" bg-black">
      <ScrollView>
        <View className="flex-1 justify-center items-center">
          {/* display the logo */}
          <Text className="text-black bg-orange-500 shadow border  shadow-gray-100 text-4xl py-2 px-6 rounded-3xl">
            Pops Weather
          </Text>

          {/* display city lookup */}
          <View className="mt-10 bg-white/15 p-5 w-full">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-row gap-5">
                <View className="bg-black  p-4 rounded-full border-2 border-white ">
                  <TouchableOpacity onPress={() => {}}>
                    <Text className="text-xl text-white text-center">
                      Current{"\n"}Location
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="bg-black  p-4 rounded-full border-2 border-white ">
                  <TouchableOpacity onPress={() => {}}>
                    <Text className="text-xl text-white text-center">Spring{"\n"}TX</Text>
                  </TouchableOpacity>
                </View>
                <View className="bg-black  p-4 rounded-full border-2 border-white ">
                  <TouchableOpacity onPress={() => {}}>
                    <Text className="text-xl text-white text-center">
                      Magnolia{"\n"}TX
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="bg-black  p-4 rounded-full border-2 border-white ">
                  <TouchableOpacity onPress={() => {}}>
                    <Text className="text-xl text-white text-center">
                      Texarkana{"\n"}AR
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* display the city */}
          <Text className="my-10 text-5xl text-slate-100">
            {location.changeLocation ? "new city" : data.city}
          </Text>

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
