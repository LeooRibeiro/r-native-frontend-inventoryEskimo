import Header from "@/components/Header";
import Footer from "@/components/footer";
import MetricCard from "@/components/MetricCard";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Package } from "lucide-react-native";

const chartItems = [
  { label: "Entradas", color: "#22c55e" },
  { label: "Saídas", color: "#ef4444" },
  { label: "Transfer.", color: "#3b82f6" },
];

const operations: {
  name: string; person: string; time: string; qty: string; unit: string;
}[] = [];

export default function RelatorioDia() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        style={styles.header}
        title="Relatório do Dia"
        subtitle="--"
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.metricsRow}>
          <MetricCard label="Entradas" value={0} style={styles.metric} />
          <MetricCard label="Saídas" value={0} style={styles.metric} />
          <MetricCard label="Transfer." value={0} style={styles.metric} />
        </View>

        <View style={styles.totalBar}>
          <Package size={16} color="#6b7280" />
          <Text style={styles.totalText}>0 operações</Text>
          <Text style={styles.totalDot}>·</Text>
          <Text style={styles.totalText}>0 unidades</Text>
        </View>

        <View style={styles.chartPlaceholder}>
          <View style={styles.chartRow}>
            {chartItems.map((item) => (
              <View key={item.label} style={styles.chartBarWrapper}>
                <View style={[styles.chartBar, { height: 8, backgroundColor: item.color }]} />
                <Text style={styles.chartLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Operações realizadas</Text>
        {operations.length > 0 && (
          <View style={styles.operationsList}>
            {operations.map((op, i) => (
              <View key={i} style={styles.opItem}>
                <View style={styles.opIcon}>
                  <Package size={18} color="#6b7280" />
                </View>
                <View style={styles.opInfo}>
                  <Text style={styles.opName}>{op.name}</Text>
                  <Text style={styles.opMeta}>{op.person} · {op.time}</Text>
                </View>
                <View style={[styles.opBadge, op.qty.startsWith("+") ? styles.opBadgeIn : styles.opBadgeOut]}>
                  <Text style={[styles.opBadgeText, op.qty.startsWith("+") ? styles.opBadgeTextIn : styles.opBadgeTextOut]}>
                    {op.qty} {op.unit}
                  </Text>
                </View>
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
  totalBar: {
    flexDirection: "row", alignItems: "center", gap: 6,
    backgroundColor: "#fff", borderRadius: 10, padding: 14,
    borderWidth: 1, borderColor: "#e5e7eb",
  },
  totalText: { fontSize: 14, fontWeight: "600", color: "#374151" },
  totalDot: { fontSize: 14, color: "#d1d5db" },
  chartPlaceholder: {
    backgroundColor: "#fff", borderRadius: 12, padding: 20,
    borderWidth: 1, borderColor: "#e5e7eb", alignItems: "center",
  },
  chartRow: {
    flexDirection: "row", alignItems: "flex-end", gap: 24, height: 140,
  },
  chartBarWrapper: { alignItems: "center", gap: 8 },
  chartBar: { width: 48, borderRadius: 6, minHeight: 8 },
  chartLabel: { fontSize: 12, fontWeight: "500", color: "#6b7280" },
  sectionTitle: { fontSize: 14, fontWeight: "700", color: "#6b7280", letterSpacing: 1, marginBottom: -4 },
  operationsList: {
    backgroundColor: "#fff", borderRadius: 12,
    borderWidth: 1, borderColor: "#e5e7eb", overflow: "hidden",
  },
  opItem: {
    flexDirection: "row", alignItems: "center", padding: 14,
    borderBottomWidth: 1, borderBottomColor: "#f3f4f6",
  },
  opIcon: {
    width: 36, height: 36, borderRadius: 8, backgroundColor: "#f3f4f6",
    justifyContent: "center", alignItems: "center", marginRight: 12,
  },
  opInfo: { flex: 1 },
  opName: { fontSize: 14, fontWeight: "500", color: "#111827" },
  opMeta: { fontSize: 12, color: "#9ca3af", marginTop: 2 },
  opBadge: { borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 },
  opBadgeIn: { backgroundColor: "#dcfce7" },
  opBadgeOut: { backgroundColor: "#fce7f3" },
  opBadgeText: { fontSize: 13, fontWeight: "700" },
  opBadgeTextIn: { color: "#166534" },
  opBadgeTextOut: { color: "#9d174d" },
});
