import { View, Text, StyleSheet, Button } from "react-native";

import "react-native-reanimated";

import Header from "@/components/Header";
import MainContent from "@/components/mainContent";

export default function Homepage() {
  return (
    <View>
      <Header
        style={styles.header}
        titleStyle={styles.headerTitle}
        subtitleStyle={styles.headerSubtitle}
        title="DISTRIBUIDORA ALVORADA"
        subtitle="Loja Andromeda - Av. Andromeda, 3940, Bairro Satelite"
      >
        {/* {children} */}
      </Header>
      <MainContent title="OPERAÇÕES" style={styles.mainContent}>
      </MainContent>
    </View>
  );
}

const styles = StyleSheet.create({
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
  mainContent: {
    backgroundColor: "fff",
  },
});