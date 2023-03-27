import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Botones from "../components/Botones";

export default function NumerosScreen({ navigation }) {
  mygetButtons = () => {
    const buttons = [];
    for (let i = 1; i < 11; i++) {
      buttons.push(<Botones key={i} tipo="numero" numero={i} />);
    }
    return buttons;
  };
  return (
    <View style={styles.container}>
      <Text>Números!</Text>
			<View style={styles.frameContainer}>
      	<View style={styles.frame}>{this.mygetButtons()}</View>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		padding: 10,
  },
  frameContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    backgroundColor: "#ecf0f1",
  },
  frame: {
    width: "33%",
  },
});
