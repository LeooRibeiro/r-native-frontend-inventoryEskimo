import Header from "@/components/Header";
import ColdPanel from "@/components/coldPanel";
import Footer from "@/components/footer";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CardButton from "@/components/cardButton";
import { router } from "expo-router";
import { Package, ArrowRightFromLine } from "lucide-react-native";

const actions = [
  { route: "/pages/supplyRoom", title: "Abastecimento Câmara", subtitle: "Registrar entrada de produtos na câmara fria.", icon: Package, bg: "#4CAF50" },
  { route: "/pages/retreatRoom", title: "Abastecimento Loja", subtitle: "Transferir produtos da câmara fria para a loja.", icon: ArrowRightFromLine, bg: "#0074f0" },
];

export default function ColdRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header style={styles.header} title="Câmara Fria">
        <ColdPanel
          temperature="--"
          temperatureStatus="--"
          totalItems={0}
          totalCategories={0}
        />
      </Header>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Ações</Text>
        <View style={styles.cardsContainer}>
          {actions.map((a) => {
            const Icon = a.icon;
            return (
              <CardButton
                key={a.route}
                onPress={() => router.push(a.route as any)}
                title={a.title}
                subtitle={a.subtitle}
                footerText="--"
                icon={Icon}
                color="#fff"
                iconBgColor={a.bg}
                iconColor="#ffffff"
                iconSize={24}
              />
            );
          })}
        </View>
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
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 24,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  cardsContainer: {
    gap: 12,
  },
});
