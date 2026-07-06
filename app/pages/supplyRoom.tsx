import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, StyleSheet } from "react-native";
import "react-native-reanimated";

export default function SupplyRoom() {
  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        titleStyle={styles.headerTitle}
        subtitleStyle={styles.headerSubtitle}
        title="SUPRIMENTOS"
        subtitle="Controle de materiais e insumos"
      >
        <Text>supplyRoom Children</Text>
      </Header>
      <Text>SUPPLY ROOM</Text>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
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
