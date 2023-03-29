import * as React from "react";
import { StyleSheet, ToastAndroid, TouchableOpacity, Text } from "react-native";
import { Audio } from "expo-av";

export default Botones = (props) => {
  const [sound, setSound] = React.useState();

  const playSound = async () => {
    ToastAndroid.show("Presionaste " + props.tipo.substring(0, props.tipo.length - 1) + " " + props.titulo, 500);
    let filePath = "../assets/audios/default.mp3";
    let uriPath = `https://creacionessoro.com.mx/audios/${props.tipo}/${props.titulo}.mp3`;
    const { sound } = await Audio.Sound.createAsync(
      props.tipo === "letras" ? require(filePath) : { uri: uriPath }
    );
    console.log("Loading Sound", props.tipo === "letras" ? filePath : uriPath);
    setSound(sound);
    console.log("Playing Sound", props.tipo === "letras" ? filePath : uriPath);
    await sound.playAsync();
  };

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity style={styles.button} onPress={() => playSound()}>
      <Text style={styles.text}>{props.titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#1fbede",
    borderRadius: 5,
    padding: 30,
    margin: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
