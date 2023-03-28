import * as React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Botones from "../components/Botones";

const DATA = [
  {
    id: "1",
    title: "1",
  },
  {
    id: "2",
    title: "2",
  },
  {
    id: "3",
    title: "3",
  },
  {
    id: "4",
    title: "4",
  },
  {
    id: "5",
    title: "4",
  },
  {
    id: "6",
    title: "6",
  },
  {
    id: "7",
    title: "7",
  },
  {
    id: "8",
    title: "8",
  },
  {
    id: "9",
    title: "9",
  },
  {
    id: "10",
    title: "10",
  },
];

export default function NumerosScreen({ navigation }) {
  botones = () => {
    const buttons = [];
    DATA.forEach((element) => {
      buttons.push(
        <Botones key={element.id} tipo="numero" titulo={element.title} />
      );
    });
    return buttons;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Elige un número</Text>
        <View style={styles.frameContainer}>
          <View style={styles.frame}>{this.botones()}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  frameContainer: {
    flex: 1,
    alignItems: "center",
  },
  frame: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    top: 10,
  },
});
