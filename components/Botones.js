import * as React from "react";
import { StyleSheet, ToastAndroid, TouchableOpacity, Text } from "react-native";

export default Botones = (props) => {
  const showToast = () => {
    ToastAndroid.show(
      "Presionaste el " + props.tipo + " " + props.numero,
      ToastAndroid.SHORT
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={() => showToast()}>
      <Text style={styles.text}>{props.numero}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
		margin: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
