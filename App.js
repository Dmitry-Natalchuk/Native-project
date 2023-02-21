import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { RegistrationScreen } from "./Screens/RegistrationScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/photoBg.jpg")}
        style={styles.image}
      >
        <View>
          <RegistrationScreen />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    /* alignItems: "center", */
  },
});
