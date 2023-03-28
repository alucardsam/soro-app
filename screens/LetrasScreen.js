import * as React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Botones from "../components/Botones";

const DATA = [
  {
    id: "1",
    title: "A",
  },
  {
    id: "2",
    title: "B",
  },
  {
    id: "3",
    title: "C",
  },
  {
    id: "4",
    title: "D",
  },
  {
    id: "5",
    title: "E",
  },
  {
    id: "6",
    title: "F",
  },
  {
    id: "7",
    title: "G",
  },
  {
    id: "8",
    title: "H",
  },
  {
    id: "9",
    title: "I",
  },
  {
    id: "10",
    title: "J",
  },
  {
    id: "11",
    title: "K",
  },
	{
    id: "12",
    title: "L",
  },
];

export default function LetrasScreen({ navigation }) {
  botones = () => {
    const buttons = [];
    DATA.forEach((element) => {
      buttons.push(
        <Botones key={element.id} tipo="letra" titulo={element.title} />
      );
    });
    return buttons;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Elige una letra</Text>
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
