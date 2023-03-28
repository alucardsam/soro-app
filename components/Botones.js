import React, { useEffect } from "react";
import { StyleSheet, ToastAndroid, TouchableOpacity, Text } from "react-native";
/* import Sound from "react-native-sound";
import dings from './src/assets/ding.mp3';

Sound.setCategory("Playback");

var ding = new Sound("1.mp3", Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log("failed to load the sound", error);
    return;
  }
  // when loaded successfully
  console.log(
    "duration in seconds: " +
      whoosh.getDuration() +
      "number of channels: " +
      whoosh.getNumberOfChannels()
  );
}); */

export default Botones = (props) => {
  /* useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []); */
  const showToast = () => {
    ToastAndroid.show("Presionaste " + props.tipo + " " + props.titulo, 500);
    /* ding.play((success) => {
      if (success) {
        console.log("successfully finished playing");
      } else {
        console.log("playback failed due to audio decoding errors");
      }
    }); */
  };

  return (
    <TouchableOpacity style={styles.button} onPress={() => showToast()}>
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
