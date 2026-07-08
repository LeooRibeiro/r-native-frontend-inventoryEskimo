import Header from "@/components/Header";
import Footer from "@/components/footer";
import MetricCard from "@/components/MetricCard";
import StatusBadge from "@/components/StatusBadge";
import CardButton from "@/components/cardButton";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FileText, BarChart3 } from "lucide-react-native";
import { router } from "expo-router";

const reports = [
  { route: "/pages/store/relatorioDia", title: "Relatório do Dia", subtitle: "Resumo de entradas, saídas e operações de hoje.", icon: FileText, bg: "#0074f0" },
  { route: "/pages/store/relatorioMensal", title: "Relatório Mensal", subtitle: "Métricas consolidadas e produtos mais movimentados.", icon: BarChart3, bg: "#8B5CF6" },
];

export default function StoreRoom() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header style={styles.header} title="Loja">
        <View style={styles.statusRow}>
          <View>
            <Text style={styles.operationLabel}>Operação atual</Text>
            <Text style={styles.operationValue}>Turno em andamento</Text>
          </View>
          <StatusBadge label="Ativa" />
        </View>
        <View style={styles.metricsRow}>
          <MetricCard label="Vendas" value={0} style={styles.metric} />
          <MetricCard label="Reposições" value={0} style={styles.metric} />
          <MetricCard label="SKUs" value={0} style={styles.metric} />
        </View>
      </Header>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Relatórios</Text>
        <View style={styles.cardsContainer}>
          {reports.map((r) => {
            const Icon = r.icon;
            return (
              <CardButton
                key={r.route}
                onPress={() => router.push(r.route as any)}
                title={r.title}
                subtitle={r.subtitle}
                footerText="--"
                icon={Icon}
                color="#fff"
                iconBgColor={r.bg}
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
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  operationLabel: {
    fontSize: 12,
    color: "rgba(255,255,255,0.7)",
  },
  operationValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginTop: 2,
  },
  metricsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  metric: {
    flex: 1,
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
