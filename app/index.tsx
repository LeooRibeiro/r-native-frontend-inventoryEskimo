import { View, Text, StyleSheet, Button } from "react-native";

import "react-native-reanimated";

import Header from "@/components/Header";
import MainContent from "@/components/mainContent";
import Footer from "@/components/footer";

export default function Homepage() {
  return (
    <View style={styles.container}>
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
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    backgroundColor: "#0074f0",
  },
  headerTitle: {
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