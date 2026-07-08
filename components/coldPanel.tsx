import { View, Text, StyleSheet } from "react-native";
import MetricCard from "./MetricCard";

type ColdPanelProps = {
  temperature?: string;
  temperatureStatus?: string;
  totalItems?: number;
  totalCategories?: number;
};

function ColdPanel({
  temperature = "--",
  temperatureStatus = "--",
  totalItems = 0,
  totalCategories = 0,
}: ColdPanelProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tempCard}>
        <View style={styles.tempRow}>
          <Text style={styles.tempValue}>{temperature} °C</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{temperatureStatus}</Text>
          </View>
        </View>
        <Text style={styles.tempLabel}>Temperatura atual</Text>
      </View>
      <View style={styles.metricsRow}>
        <MetricCard label="Itens em estoque" value={totalItems} style={styles.metric} />
        <MetricCard label="Categorias" value={totalCategories} style={styles.metric} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
    marginTop: 16,
  },
  tempCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  tempRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tempValue: {
    fontSize: 36,
    fontWeight: "700",
    color: "#2563eb",
  },
  statusBadge: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: "#dcfce7",
  },
  statusText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#166534",
  },
  tempLabel: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 4,
  },
  metricsRow: {
    flexDirection: "row",
    gap: 12,
  },
  metric: {
    flex: 1,
  },
});

export default ColdPanel;
