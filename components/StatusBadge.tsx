import { View, Text, StyleSheet } from "react-native";

type StatusBadgeProps = {
  label: string;
};

function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#dcfce7",
    alignSelf: "flex-start",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#166534",
    marginRight: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#166534",
  },
});

export default StatusBadge;
