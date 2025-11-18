import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeAppData = async (value:string) => {
  try {
    await AsyncStorage.setItem("appData", value);
  } catch (e) {
    console.log("Error: " + e)
  }
};


export const getAppData = async () => {
  try {
    const value = await AsyncStorage.getItem("appData");
    const isAppDataLoaded = true
    const parsedValue = value ? JSON.parse(value) : null
    console.log(parsedValue)
    if (parsedValue !== null) {
     return { parsedValue, isAppDataLoaded }
    }
  } catch (e) {
    console.log("Error: " + e)
  }
};


