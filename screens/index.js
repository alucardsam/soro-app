import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NumerosScreen from "./NumerosScreen";
import LetrasScreen from "./LetrasScreen";
import ConfiguracionScreen from "./ConfiguracionScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Números") {
            iconName = focused
							? "numeric"
							: "numeric";
          } else if (route.name === "Letras") {
            iconName = focused
              ? "alphabetical-variant"
              : "alphabetical-variant-off";
          } else if (route.name === "Configuración") {
            iconName = focused
              ? "cog"
              : "cog-off";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Números" component={NumerosScreen} />
      <Tab.Screen name="Letras" component={LetrasScreen} />
      <Tab.Screen name="Configuración" component={ConfiguracionScreen} />
    </Tab.Navigator>
  );
}
