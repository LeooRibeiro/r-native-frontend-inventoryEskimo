import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Home } from "lucide-react-native";
import { router } from "expo-router";

function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => router.push("/")}
      >
        <Home size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#0074f0",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
});

export default Footer;
