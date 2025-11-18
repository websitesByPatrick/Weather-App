import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
 
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
        },
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#240046",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Current",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="daily"
        options={{
          title: "Daily",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calendar-sharp" : "calendar-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="hourly"
        options={{
          title: "Hourly",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "alarm-sharp" : "alarm-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings-sharp" : "settings-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
