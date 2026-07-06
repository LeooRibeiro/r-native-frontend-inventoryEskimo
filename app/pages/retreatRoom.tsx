import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, StyleSheet } from "react-native";
import "react-native-reanimated";

export default function RetreatRoom() {
  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        titleStyle={styles.headerTitle}
        subtitleStyle={styles.headerSubtitle}
        title="RETIRADA"
        subtitle="Controle de retirada de produtos"
      >
        <Text>retreatRoom Children</Text>
      </Header>
      <Text>RETREAT ROOM</Text>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightcoral",
    height: "100%",
  },
  header: {
    backgroundColor: "#0074f0",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerTitle: {
    marginBottom: 70,
    color: "#fff",
    fontFamily: "Monospace",
  },
  headerSubtitle: {
    color: "#fff",
    fontFamily: "Monospace",
  },
});
