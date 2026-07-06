import { View, Text, StyleSheet } from "react-native";

type ColdPanelProps = {
  totalProducts?: number;
  totalCrates?: number;
};

function ColdPanel({ totalProducts = 0, totalCrates = 0 }: ColdPanelProps) {
  return (
    <View style={styles.containerPanel}>
      <View style={styles.field}>
        <Text style={styles.label}>Total de produtos</Text>
        <Text style={styles.value}>{totalProducts}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Total de engradados</Text>
        <Text style={styles.value}>{totalCrates}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPanel: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    padding: 8,
    gap: 8,
  },
  field: {
    width: "48%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  label: {
    fontSize: 12,
    color: "#333",
    fontFamily: "Monospace",
  },
  value: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "#333",
    fontFamily: "Monospace",
  },
});

export default ColdPanel;
