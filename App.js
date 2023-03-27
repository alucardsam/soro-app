import React, { useEffect } from "react";
import { BackHandler, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./screens";

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Momento!", "¿Estas seguro de cerrar la app?", [
				{
					text: "Si",
					onPress: () => BackHandler.exitApp(),
					style: "default"
				},
        {
          text: "No",
          onPress: () => null,
          style: "cancel",
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
