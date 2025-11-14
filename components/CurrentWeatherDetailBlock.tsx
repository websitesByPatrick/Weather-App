import { View, Text } from 'react-native'

interface CurrentWeatherDetailBlockTypes {
  title: string
  data: string | number
}

const CurrentWeatherDetailBlock = ({title, data}:CurrentWeatherDetailBlockTypes) => {
  return (
    <View className="w-[50%] items-center justify-start rounded-2xl bg-black py-2 mt-5 shadow shadow-gray-700">
      <Text className="text-lg text-gray-100">{title}</Text>
      <Text className="text-lg text-gray-100">{data}</Text>
    </View>
  );
}

export default CurrentWeatherDetailBlock