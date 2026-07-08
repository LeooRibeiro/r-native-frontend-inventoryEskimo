import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";

type MetricCardProps = {
  label: string;
  value: string | number;
  subtext?: string;
  subtextColor?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
};

function MetricCard({ label, value, subtext, subtextColor, style, labelStyle, valueStyle }: MetricCardProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
      {subtext ? <Text style={[styles.subtext, subtextColor ? { color: subtextColor } : undefined]}>{subtext}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  label: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
    textAlign: "center",
  },
  value: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
  },
  subtext: {
    fontSize: 11,
    color: "#22c55e",
    marginTop: 2,
    textAlign: "center",
  },
});

export default MetricCard;
