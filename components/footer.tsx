import { TouchableOpacity, StyleSheet } from "react-native";
import { Home } from "lucide-react-native";
import { router } from "expo-router";

function Footer() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => router.push("/")}
    >
      <Home size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0074f0",
    paddingVertical: 12,
  },
});

export default Footer;
