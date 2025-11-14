import { LocationContextProvider } from "@/contextProviders/LocationContext";
import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <LocationContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </LocationContextProvider>
  );
}
