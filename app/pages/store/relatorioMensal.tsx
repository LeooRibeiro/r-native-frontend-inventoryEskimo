import Header from "@/components/Header";
import Footer from "@/components/footer";
import MetricCard from "@/components/MetricCard";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BarChart3 } from "lucide-react-native";

const chartDays = Array.from({ length: 30 }, (_, i) => i);
const chartFooterLabels = ["01", "05", "10", "15", "20", "25", "30"];

const topProducts: {
  rank: number; name: string; qty: string; change: string; changeColor: string;
}[] = [];

const summary: { label: string; value: string }[] = [];

export default function RelatorioMensal() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        style={styles.header}
        title="Relatório Mensal"
        subtitle="--"
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.metricsRow}>
          <MetricCard label="Entradas no mês" value={0} style={styles.metric} />
          <MetricCard label="Saídas no mês" value={0} style={styles.metric} />
        </View>

        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <BarChart3 size={16} color="#6b7280" />
            <Text style={styles.chartTitle}>Movimentações</Text>
          </View>
          <View style={styles.chartRow}>
            {chartDays.map((i) => (
              <View key={i} style={styles.miniBarWrapper}>
                <View style={[styles.miniBar, { height: 4 }]} />
              </View>
            ))}
          </View>
          <View style={styles.chartFooter}>
            {chartFooterLabels.map((l) => (
              <Text key={l} style={styles.chartFooterText}>{l}</Text>
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Mais movimentados</Text>
        {topProducts.length > 0 && (
          <View style={styles.rankingList}>
            {topProducts.map((p) => (
              <View key={p.rank} style={styles.rankingItem}>
                <View style={styles.rankBadge}>
                  <Text style={styles.rankText}>{p.rank}</Text>
                </View>
                <View style={styles.rankInfo}>
                  <Text style={styles.rankName}>{p.name}</Text>
                  <Text style={styles.rankQty}>{p.qty}</Text>
                </View>
                <Text style={[styles.rankChange, { color: p.changeColor }]}>{p.change}</Text>
              </View>
            ))}
          </View>
        )}

        <Text style={styles.sectionTitle}>Resumo estatístico</Text>
        {summary.length > 0 && (
          <View style={styles.summaryGrid}>
            {summary.map((s) => (
              <View key={s.label} style={styles.summaryCard}>
                <Text style={styles.summaryLabel}>{s.label}</Text>
                <Text style={styles.summaryValue}>{s.value}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  header: { backgroundColor: "#0074f0" },
  scrollView: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 24, gap: 16 },
  metricsRow: { flexDirection: "row", gap: 10 },
  metric: { flex: 1 },
  chartCard: {
    backgroundColor: "#fff", borderRadius: 12, padding: 20,
    borderWidth: 1, borderColor: "#e5e7eb",
  },
  chartHeader: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 16 },
  chartTitle: { fontSize: 14, fontWeight: "600", color: "#374151" },
  chartRow: {
    flexDirection: "row", alignItems: "flex-end", gap: 3, height: 110,
  },
  miniBarWrapper: { flex: 1, alignItems: "center", justifyContent: "flex-end" },
  miniBar: { width: "100%", maxWidth: 8, backgroundColor: "#3b82f6", borderRadius: 2, minHeight: 4 },
  chartFooter: {
    flexDirection: "row", justifyContent: "space-between", marginTop: 8,
  },
  chartFooterText: { fontSize: 10, color: "#9ca3af" },
  sectionTitle: { fontSize: 14, fontWeight: "700", color: "#6b7280", letterSpacing: 1, marginBottom: -4 },
  rankingList: {
    backgroundColor: "#fff", borderRadius: 12,
    borderWidth: 1, borderColor: "#e5e7eb", overflow: "hidden",
  },
  rankingItem: {
    flexDirection: "row", alignItems: "center", padding: 14,
    borderBottomWidth: 1, borderBottomColor: "#f3f4f6",
  },
  rankBadge: {
    width: 28, height: 28, borderRadius: 8, backgroundColor: "#f3f4f6",
    justifyContent: "center", alignItems: "center", marginRight: 12,
  },
  rankText: { fontSize: 13, fontWeight: "700", color: "#6b7280" },
  rankInfo: { flex: 1 },
  rankName: { fontSize: 14, fontWeight: "500", color: "#111827" },
  rankQty: { fontSize: 12, color: "#9ca3af", marginTop: 2 },
  rankChange: { fontSize: 13, fontWeight: "700" },
  summaryGrid: {
    flexDirection: "row", flexWrap: "wrap", gap: 10,
  },
  summaryCard: {
    width: "48%", backgroundColor: "#fff", borderRadius: 12, padding: 16,
    borderWidth: 1, borderColor: "#e5e7eb",
  },
  summaryLabel: { fontSize: 12, color: "#6b7280", marginBottom: 4 },
  summaryValue: { fontSize: 20, fontWeight: "700", color: "#111827" },
});
