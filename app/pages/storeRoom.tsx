import Header from "@/components/Header";
import Footer from "@/components/footer";
import { View, Text, StyleSheet } from "react-native";
import "react-native-reanimated";

export default function coldRoom() {
  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        titleStyle={styles.headerTitle}
        subtitleStyle={styles.headerSubtitle}
        title="CAMARA FRIA"
        subtitle="Distribuição dos produtos"
      >
        <Text>coldRoom Children</Text>
      </Header>
      <Text>STORE ROOM</Text>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightpink",
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
