import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CityChoiceProps {
  choice: string;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}


const CityChoice = ({ choice, city, setCity }: CityChoiceProps) => {
  return (
    <TouchableOpacity onPress={() => {
      setCity(choice)
    }}>
      <View className="bg-black p-4 rounded-full border-2 border-white mx-2 ">
        <Text className="text-sm text-white text-center">{choice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CityChoice;
