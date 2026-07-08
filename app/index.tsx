import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainContent from "@/components/mainContent";
import Footer from "@/components/footer";

export default function Homepage() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.companyName}>DISTRIBUIDORA ALVORADA</Text>
        <Text style={styles.storeName}>--</Text>
        <Text style={styles.address}>--</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <MainContent title="Operações" />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    backgroundColor: "#0074f0",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  companyName: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255,255,255,0.8)",
    letterSpacing: 1,
  },
  storeName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginTop: 4,
  },
  address: {
    fontSize: 13,
    color: "rgba(255,255,255,0.7)",
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 8,
  },
});
